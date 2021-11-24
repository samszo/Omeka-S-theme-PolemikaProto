class LinkArchetype_argument extends LinkArchetype {

    constructor(data, diagram) {
		super(data, diagram);
    }
    /* overridden */
	instanciate(domElt, data, diagram) {
		var instance = new LinkInstance_argument(domElt, data, this, diagram);
		this.addInstance(instance);
		return instance;
	}
}