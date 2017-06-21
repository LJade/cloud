/**
 * 本测试文件测试hello.vue
 * */
// 引用vue
import Vue from 'vue'
// 引用要测试的组件
import hello from 'src/components/Hello.vue'
import child from 'src/components/child.vue'

// 测试内容:页面进入标题文字是否为 HelloKarma
describe('Hello.vue', () => {
  it('组件加载后，title应该是Hello Karma', () => {
    // 这里将app生成的vue实例，并使用$mount()模拟挂载状态
    let vm = new Vue(hello).$mount();
    // 断言组件的title是否变成了'hello karma'
    expect(vm.title).toEqual('Hello World');
  });
});

// 测试按钮点击切换文字是否正确
describe('hello.vue', () => {
  // 描述要测试的最小单元
  it('设置message', () => {
    // 这里将app生成vue实例，并使用 $mount() 模拟挂载状态
    let vm = new Vue(app).$mount();
    // 执行setMessage方法
    vm.setMessage('你好世界');
    // 断言组件的message是否变为了'你好世界'
    expect(vm.message).toEqual('你好世界');
  })
});

// 测试内容:子组件能否完成大写转换
describe('child.vue', () => {
  it('toUpper过滤器能把app转换为APP', () => {
    // vue 组件export 出来的是个对象，我们直接用这个对象的属性和方法就能调用到要测试的filter
    let appStr = child.filters.upperCase('abcde');
    // 断言组件的appStr是为'ABCDE'
    expect(appStr).toEqual('ABCDE');
  })
});

/**
 * 获取生成的vm
 *
 * @param {Object} Component 组件
 * @param {Object} propsData props数据
 * @return {Object} vue实例
 */
function getRenderedVm(Component, propsData) {
  const Ctor = Vue.extend(Component);
  return new Ctor({propsData}).$mount();
}
// 测试内容: 父子组件传参
describe('child.vue', () => {

  it('组件加载后，child组件的message应该是[Welcome to Your Vue.js App]', () => {
    let childvm = getRenderedVm(child, {
      message: '这是message'
    });
    // 断言组件的child组件的props是否生效
    expect(childvm.message).toEqual('这是message');
  })
});


describe('test app.vue', () => {
  //异步数据更新
  it('数据更新后，视图应该改变', done => {
    // 这里将app生成vue实例，并使用$mount() 模拟挂载状态
    let vm = new Vue(app).$mount();
    // 挂载后改变title
    vm.title = 'APP';
    Vue.nextTick(() => {
      let title = vm.$el.getElementsByTagName('h1')[0];
      expect(title.textContent).toEqual('APP');
      done();
    })
  })
});

