class ProtoAPI {

    constructor(proto) {
        this.proto = proto;
	}
	getJSON(url, callback) {
	    if (this.useProxy){
	        url = this.proto.getRootUrl() + url;
			$.getJSON(
				'/proxy',
				{
					url: url,
				},
				function(data) {
					data = JSON.parse(data.result);
					callback(data);
				}
			)
	    } else {
			mdPatienter.show();
			$.ajax({
				url: url,
				dataType: "json"				
			}).done(function(data) {
				callback(data);
			})
			.fail(function(e) {
				console.log(e)
				})
			.always(function() {
				mdPatienter.close();
			});
	    }
	}
    postJson(url, d, callback) {
		mdPatienter.show();
		return $.ajax({
			type: 'POST',
			url: url,
			data: d
			}).done(function(data) {
		    	callback(data);
			})
			.fail(function(e) {
			  console.log(e)
		  	})
			.always(function() {
				mdPatienter.close();
			});
    }

}