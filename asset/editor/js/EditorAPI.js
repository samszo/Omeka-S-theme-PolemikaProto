class EditorAPI extends ProtoAPI {

    constructor(proto) {
        super(proto);
        this.useLocalData = false;
	}
	getDiagrams(callback) {
        //urlAjax définie dans helper/JsUris.php
        var url = urlAjax+'&type=diagramme&action=getDiagrammes';
        if (this.useLocalData)
            url = '/media/editor/data/diagramme_local.json';
        this.getJSON(
            url,
            function(data) {
                callback(data);
            }
        );
	}
	getConceptsDansCrible(callback) {
        var self = this;
        if (this.conceptsDansCrible != null)
            callback(this.conceptsDansCrible);
        else {
            //var url = 'https://polemika.univ-paris8.fr/omk/api/items?resource_template_id=41&sort_by=created&sort_order=desc';
            var url = 'http://localhost/omk_polemika/api/items?resource_template_id=41&sort_by=created&sort_order=desc';
            
            if (this.useLocalData)
                url = '/media/editor/data/conceptDansCrible.json';
            this.getJSON(
                url,
                function(data) {
                    data = jsonPath(data, "*.o:title");
                    self.conceptsDansCrible = data;
                    callback(data);
                }
            );
        }
	}
	getDiagramFragment(callback) {
        var url = '/media/editor/data/import3.json';
        this.getJSON(
            url,
            function(data) {
                callback(data);
            }
        );
	}
}