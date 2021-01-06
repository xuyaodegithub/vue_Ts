import { Vue, Component } from "vue-property-decorator";

@Component({})
class App extends Vue {
  protected render(h: any) {
    return (
      <div>
        <router-view/>
      </div>
    );
  }
}

export default App;
