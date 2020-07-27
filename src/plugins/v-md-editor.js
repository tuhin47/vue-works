import Vue from 'vue'
import VMdEditor from '@kangc/v-md-editor/lib/codemirror-editor'
import '@kangc/v-md-editor/lib/style/codemirror-editor.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import enUS from '@kangc/v-md-editor/lib/lang/en-US'
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index'

VMdEditor.lang.use('en-US', enUS)
VMdEditor.use(createTodoListPlugin())

VMdEditor.use(githubTheme)

Vue.use(VMdEditor)
