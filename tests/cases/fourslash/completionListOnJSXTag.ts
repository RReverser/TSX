/// <reference path='fourslash.ts'/>

/////// <jsx namespace={DOM} />
//// interface DOMProps { className?: string; }
//// interface DOMElem extends DOMProps { }
////declare module DOM {
////    function div(props?: DOMProps): DOMElem;
////}
////function LocalElement() { }
////</**/

goTo.marker();
verify.completionListContains('div');
verify.completionListContains('LocalElement');
verify.completionListContains('number');