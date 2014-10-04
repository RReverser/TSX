/// <jsx namespace={ns} />

interface AProps {
	href: string;
}

interface DivProps {
	className?: string;
}

interface DivElement extends DivProps {
}

function div(props: DivProps): DivElement {
	return props;
}

class a {
	constructor(props: AProps) {
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
var html = <div
data-numbers="
1
2
" x={0} yes>
	<b>{this.title}</b>
	Current time{/* in milliseconds */} is{} <ns2.i>[ {Date.now()} ]</ns2.i>
</div>;

// Works fine with type casts
var smth = <ns2.i><any><b>text</b>;