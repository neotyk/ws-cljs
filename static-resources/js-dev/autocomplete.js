goog.provide('autocomplete');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.ui.AutoComplete');
goog.require('goog.ui.AutoComplete.Basic');
/**
* Updates autocompletion.
* 
* Arguments:
* - old-ac: previous autocompletion to detach
* - completions: new completions
* - elem: element to attach autocompletion
* 
* Returns: new autocompletion based on provided completions and attached to elem.
*/
autocomplete.update = (function update(old_ac,completions,elem){
if(cljs.core.truth_(old_ac))
{old_ac.detachInputs(elem);
} else
{}
return (new goog.ui.AutoComplete.Basic(cljs.core.apply.call(null,cljs.core.array,completions),elem,false,true));
});
