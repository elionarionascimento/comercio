import { reactive } from "vue";

export const aparecer = reactive({
    showcomponent: false
})

export function apareceraba(){
    aparecer.showcomponent = !aparecer.showcomponent
}

export function sumircontador(){
    aparecer.showcomponent = false
}