/// <reference path='fourslash.ts'/>

/////// <jsx namespace={DOM} />
//// interface DOMProps { className?: string; }
//// interface DOMElem extends DOMProps { }
////declare module DOM {
////    function div(props?: DOMProps): DOMElem;
////}
////function LocalElement() { }
////<div className="a">{/**/

goTo.marker();
verify.completionListContains('LocalElement');
verify.completionListContains('DOM');
verify.not.completionListContains('div');