/// <jsx namespace={ns} />

interface HTMLDivElement {
}

function div(props: { className?: string; }): HTMLDivElement {
	return {};
}

class a {
	constructor(props: { href: string; }) {
	}
}

module ns {
	export class b {
	}
}

module ns2 {
	export class i {
	}
}

// Creates element from factory
var elm = <div className="cls" />;

// Creates element from class
var elm2 = <a href="http://rreverser.com/" />;

// Creates element from auto-namespaced name
var b = <b>text</b>;

// Local symbol doesn't override auto-namespaced name
var b2 = <b>another text</b>;

// Creates element from manually namespaced name
var i = <ns2.i>quite different text</ns2.i>;

// Creates complicated structures of nested elements
var html = <div data-numbers="
1
2
">
	<b>{this.title}</b>
	Current time is <ns2.i>[ {Date.now()} ]</ns2.i>
</div>;

// Works fine with type casts
var smth = <ns2.i><any><b>text</b>;