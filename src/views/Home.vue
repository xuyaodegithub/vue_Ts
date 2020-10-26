<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" @click="add"/>
        <HelloWorld :msg="msg" @reset="reset"/>
        <div v-for="it in 5" :key="it" ref="resfs">
            {{it | change}}
        </div>
        <p>{{addMSg}}</p>
        <input type="number" name="" id="" v-model="testNum.a" ref="input">
        <span @click="addNum">点我撒</span>
    </div>
</template>

<script lang="ts">
    import {MyMixins} from "@/mixins/index.ts";
    import {mapGetters, mapActions} from "vuex";
    import {Component, Vue, Prop, Ref, Watch} from "vue-property-decorator";
    import {Module, VuexModule, } from 'vuex-module-decorators'
    import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
    import cookies from "js-cookie";
    import {State, Getter, Action, Mutation, namespace} from 'vuex-class'

    @Component({
        components: {
            HelloWorld
        },
        filters: {//过滤器
            change(num: number) {
                return num + 1
            }
        },
        directives: { // 局部指令
            test(el: HTMLElement, binding) {
                console.log(el, binding);
            }
        },
        ...mapGetters(['ag']),
        ...mapActions(['agActions']),
        mixins: [MyMixins],//mixins
    })
    @Module
    export default class Home extends Vue {//mixins[MyMixins,MyMixins2]
        private msg = 'Welcome to Your Vue.js + TypeScript App';//私有属性
        private testNum = {a: 1, b: 2};//私有属性
        @Prop({type: String, default: '123456', required: false}) readonly a!: number | undefined;//!告诉TypeScript我这里一定有值.
        @Prop({type: Number, default: 0}) c: number | undefined;
        @Prop(Number) d: number | undefined;
        @Ref('resfs') resfs: any;//ref写法
        @Getter('ag') getterAg: any;
        @Action('agActions') agActions: void;
        $refs!: {
            input: any,
            resfs: any,
        }
        //     interface objValidate{//接口
        //     name:number;
        //     count: String | Number;
        //     age?:Number;//age 被定义为可选属性，那么在传对象的时候age就可有可无。
        //     readonly sex:Boolean;//只读属性，一旦被赋值，不能修改
        // }
        @Watch('testNum', {deep: true, immediate: false})// 深度监听 去掉第二个参数为简单监听
        handelChangetestNum(newVal: object, oldVal: object) {
            console.log(123)
        }

        add(): object {
            return {a: 4}
        }

        reset(k: number): void {
            alert(k)
        }

        private getusername(): object {//私有方法
            return {}
        }

        private addNum(): void {//私有方法
            this.testNum.a++;
            this.$store.dispatch('agActions');
        }

        get addMSg(): string {//计算属性
            return this.msg += '哈哈哈哈哈'
        }

        mounted() {//生命周期正常写
            const str: any = 'hello'
            // let num: number = (<string>str).length
            // console.log(cookies.set);
            console.log(this.acs, this.getterAg,this.agActions);
            this.$nextTick(() => {
                const el: any = this.$refs.resfs;//ref写法
                console.log(el[0].innerText, (this.$refs.resfs as any)[2].innerText, this.resfs[1], this.$refs.input)
                this.$refs.input.focus()
            })
        }
    }
</script>
