export namespace main {
	
	export class DivisionInput {
	    x: number;
	    y: number;
	
	    static createFrom(source: any = {}) {
	        return new DivisionInput(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.x = source["x"];
	        this.y = source["y"];
	    }
	}

}

