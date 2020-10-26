import { Vue,Component} from 'vue-property-decorator';
@Component
export class MyMixins extends Vue {//class类必须大写
    acs=999;
}
@Component
export class MyMixins2 extends Vue {
    form: object = {}
    handleSubmit(name:any):Promise<any> {
        return new Promise((resolve) => {
            resolve()
        })
    }
    handleReset(name: any):void {
        window.alert(`${name}`)
    }
}
