## 在 Vue 中使用 JSX 需要注意的地方

要监听 JSX 中的事件，我们需要`“on”`前缀。 例如，将`onClick`用于单击事件。

```hsp
render (createElement) {
     return (
         <button onClick={this.handleClick}></button>
     )
 }
```

要修改事件，请使用

```hsp
 render (createElement) {
     return (
         <button onClick:prevent={this.handleClick}></button>
     )
 }
```

绑定变量，注意这里不是使用 ：

```javascript
 render (createElement) {
     return (
         <button content={this.generatedText}></button>
     )
 }
```

将HTML字符串设置为元素的内容，使用`domPropsInnerHTML`而不是使用`v-html`

```javascript
render (createElement) {
     return (
         <button domPropsInnerHTML={htmlContent}></button>
     )
 }
```

我们也可以展开一个大对象：

```kotlin
 render (createElement) {
     return (
         <button {...this.largeProps}></button>
     )
 }
```

## 在 render函数中使用JSX

## 指令

```js
render() {
  {/* 指令 */}
  {/* v-model */}
  <div><input vModel={this.newTodoText} /></div>
  {/* v-model 以及修饰符 */}
  <div><input vModel_trim={this.tirmData} /></div>
  {/* v-on 监听事件 */}
  <div><input vOn:input={this.inputText} /></div>
  {/* v-on 监听事件以及修饰符 */}
  <div><input vOn:click_stop_prevent={this.inputText} /></div>
  {/* v-html */}
  <p domPropsInnerHTML={html} />
}
```