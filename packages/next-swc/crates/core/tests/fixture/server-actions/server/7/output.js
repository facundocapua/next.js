/* __next_internal_action_entry_do_not_use__ $$ACTION_0 */ import { createActionProxy } from "private-next-rsc-action-proxy";
import deleteFromDb from 'db';
export function Item(product, foo, bar) {
    async function deleteItem(...args) {
        return $$ACTION_0.apply(null, (deleteItem.$$bound || []).concat(args));
    }
    createActionProxy("6d53ce510b2e36499b8f56038817b9bad86cabb4", [
        product.id,
        product?.foo,
        product.bar.baz,
        product,
        foo,
        bar
    ], deleteItem, $$ACTION_0);
    return <Button action={deleteItem}>Delete</Button>;
}
export async function $$ACTION_0($$ACTION_ARG_0, $$ACTION_ARG_1, $$ACTION_ARG_2, $$ACTION_ARG_3, $$ACTION_ARG_4, $$ACTION_ARG_5) {
    await deleteFromDb($$ACTION_ARG_3.id, $$ACTION_ARG_3?.foo, $$ACTION_ARG_3.bar.baz, $$ACTION_ARG_3[$$ACTION_ARG_4, $$ACTION_ARG_5]);
}
$$ACTION_0.$$closure_args = 6;