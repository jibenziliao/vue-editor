<template>
  <div id="app">
    <pre>
      <div class="mermaid">
        graph TD
        A[Client] --> B[Load Balancer]
        B --> C[Server01]
        B --> D[Server02]
      </div>
      <div class="mermaid">
        graph TD
        A[Hard] -->|Text| B(Round)
        B --> C{Decision}
        C -->|One| D[Result 1]
        C -->|Two| E[Result 2]
      </div>
    </pre>
    <link rel="stylesheet" href="/static/editor.md/css/editormd.min.css" />

    <div id="editormd">
      <textarea style="display:none;">### Hello Editor.md !</textarea>
    </div>
    <div :id="id"></div>
    <button @click="printData()">打印</button>
  </div>
</template>

<script>
import $ from 'jquery'
import { v4 as uuid } from 'uuid'
export default {
  name: 'App',
  data: () => {
    return {
      //最终生成的编辑器
      editor: null,
      //默认选项
      defaultOptions: {
        //width: "90%",
        height: 440,
        path: '/static/editor.md/lib/',
        theme: 'light',
        previewTheme: 'dark',
        editorTheme: 'pastel-on-dark',
        // markdown: 'md',   //动态设置的markdown文本
        codeFold: true,
        syncScrolling : false,
        saveHTMLToTextarea: true, // 保存 HTML 到 Textarea
        searchReplace: true,
        watch: true,                // 实时预览
        htmlDecode: 'style,script,iframe|on*', // 开启 HTML 标签解析，为了安全性，默认不开启
        //toolbar  : false,             //关闭工具栏
        //previewCodeHighlight : false, // 关闭预览 HTML 的代码块高亮，默认开启
        emoji: true,
        taskList: true,
        tocm: true, // Using [TOCM]
        tex: true, // 开启科学公式TeX语言支持，默认关闭
        flowChart: true, // 开启流程图支持，默认关闭
        sequenceDiagram: true, // 开启时序/序列图支持，默认关闭,
        //dialogLockScreen : false,   // 设置弹出层对话框不锁屏，全局通用，默认为true
        //dialogShowMask : false,     // 设置弹出层对话框显示透明遮罩层，全局通用，默认为true
        //dialogDraggable : false,    // 设置弹出层对话框不可拖动，全局通用，默认为true
        //dialogMaskOpacity : 0.4,    // 设置透明遮罩层的透明度，全局通用，默认值为0.1
        //dialogMaskBgColor : "#000", // 设置透明遮罩层的背景颜色，全局通用，默认为#fff
        imageUpload: true,
        imageFormats: ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'],
        imageUploadURL: './php/upload.php',
        onload: function() {
          //console.log('onload', this);
          //this.fullscreen();
          //this.unwatch();
          //this.watch().fullscreen();
          //this.setMarkdown("#PHP");
          //this.width("100%");
          //this.height(480);
          //this.resize("100%", 640);
        }
      }
    }
  },
  props: {
    /**
     * editormd挂载元素的id
     */
    id: {
      type: String,
      default: uuid()
    },
    /**
     * editormd的选项对象
     */
    options: {
      type: Object
    }
  },
  components: {},
  methods: {
    initEditor() {
      let vm = this
      // 加载editormd
      this.requireEditor(function() {
        vm.editor = editormd(vm.id, vm.getOptions())
      })
    },
    initMermaid() {
      mermaid.initialize({ startOnLoad: false })
    },
    requireEditor(callback) {
      let vm = this
      //设置全局变量，因为editormd依赖jquery
      window.$ = window.jQuery = $
      //异步加载并执行
      $.getScript('/static/editor.md/editormd.min.js', function(script) {
        callback()
      })
      //加载css
      $('head').append(
        $('<link rel="stylesheet" type="text/css" />').attr('href', '/lib/editor.md/css/editormd.min.css')
      )
    },
    getOptions() {
      return Object.assign(this.defaultOptions, this.options)
    },
    printData() {
      console.log(this.editor)
      console.log(this.editor?.markdownTextarea[0]?.value)
    }
  },
  mounted() {
    // mermaid.initialize({ startOnLoad: false })
    this.initMermaid()
    this.initEditor()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
