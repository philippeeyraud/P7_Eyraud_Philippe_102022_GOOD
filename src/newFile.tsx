import { ref } from "vue";

export default await (async () => {
const __VLS_setup = async () => {
const count = ref(0);

const __VLS_Component = (await import('vue')).defineComponent({
setup() {
return {};
},
});

const __VLS_options = {};

let __VLS_name!: 'Product';
function __VLS_template() {
import * as __VLS_types from './__VLS_types.js'; import('./__VLS_types.js');
let __VLS_ctx!: __VLS_types.PickNotAny<__VLS_Ctx, {}> & InstanceType<__VLS_types.PickNotAny<typeof __VLS_Component, new () => {}>> & InstanceType<__VLS_types.PickNotAny<typeof __VLS_component, new () => {}>> & {};
let __VLS_vmUnwrap!: typeof __VLS_options & { components: {}; };
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_component extends { components: infer C; } ? C : {}> & __VLS_types.GlobalComponents & typeof __VLS_vmUnwrap.components & __VLS_types.PickComponents<typeof __VLS_ctx>;
let __VLS_selfComponent!: __VLS_types.SelfComponent<typeof __VLS_name, typeof __VLS_component & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_selfComponent, keyof typeof __VLS_otherComponents>;
__VLS_components['/* __VLS_.SearchTexts.Components */'];
({} as __VLS_types.GlobalAttrs)['/* __VLS_.SearchTexts.GlobalAttrs */'];
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
{
<h3></h3>;
}
{
<ul></ul>;
{
<li></li>;
}
}
{
<button></button>;
const __VLS_5: {
'click': __VLS_types.FillingEventArg<
__VLS_types.GlobalAttrs['onClick']
>;
} = {
click: $event => {
__VLS_ctx.count++;
}
};
[count,];
}
{
<p></p>;
(__VLS_ctx.count);
[count,];
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
const __VLS_component = (await import('vue')).defineComponent({
setup() {
return {
count: count,
};
},
});
return {} as typeof __VLS_Component;
};
return await __VLS_setup();
})();
