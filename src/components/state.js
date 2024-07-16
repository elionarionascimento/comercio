import { reactive } from "vue";

export const state = reactive({
    showcomponent: false
})

export function apareceritem(){
    state.showcomponent = !state.showcomponent
}