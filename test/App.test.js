import App from '../src/App.vue';
import { mount } from "@vue/test-utils";

test("App renders",  () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain("Maria Carter");
});