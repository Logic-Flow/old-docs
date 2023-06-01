(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{402:function(t,a,s){"use strict";s.r(a);var e=s(24),o=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"logicflow-的设计和架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logicflow-的设计和架构"}},[t._v("#")]),t._v(" LogicFlow 的设计和架构")]),t._v(" "),s("h2",{attrs:{id:"logicflow-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logicflow-简介"}},[t._v("#")]),t._v(" LogicFlow 简介")]),t._v(" "),s("p",[t._v("LogicFlow 是由滴滴体验平台技术研发的一款解决流程可视化的前端框架，提供了一系列流程图交互、编辑所必需的功能和简单灵活的节点自定义、插件等拓展机制，方便我们快速在业务系统内满足类流程图的需求。目前，LogicFlow 已经支持了客服业务下 IVR、工单流转、智能机器人等多个运营系统，在各系统不同的流程配置需求中得到了验证。")]),t._v(" "),s("h2",{attrs:{id:"为何自研-logicflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为何自研-logicflow"}},[t._v("#")]),t._v(" 为何自研 LogicFlow")]),t._v(" "),s("p",[t._v("首先，在几乎支持了集团所有事业部客服系统的诉求下，面对多样性、逻辑变更快的业务场景，传统的面向场景编程成本高且周期长。因此我们建设了线上配置化的运营系统，让运营、产品同学能够通过画流程图的方式变更线上的业务逻辑，比如用户电话进线时的互动式语音应答、人工客服在处理用户进线时的标准作业流程等千人千面的应用场景。")]),t._v(" "),s("p",[t._v("其次，各业务系统虽然都需要应用流程可视化技术，但需求各不相同。有的对流程图的要求比较简单，图的数据格式也简单，而有的需要按照 BPMN 的规范来绘制流程图，对于定制化的要求较高。我们调研了市面上相关的框架 （BPMN.js、X6、Jsplumb、G6-editor），均存在不满足的场景，技术栈统一的成本很高。具体表现在：")]),t._v(" "),s("ol",[s("li",[t._v("BMPN.js、Jsplumb 的拓展能力不足，自定义节点支持成本很高；只能全量引入，各系统无法按需引入")]),t._v(" "),s("li",[t._v("与后端配套的流程引擎适配，成本较高。均不支持数据转换、不支持流程的校验等业务定制需求。")])]),t._v(" "),s("p",[t._v("因此，我们在 2020 上半年开启了 LogicFlow 的项目，支持各系统的流程可视化需求。")]),t._v(" "),s("h2",{attrs:{id:"logicflow-的能力和特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logicflow-的能力和特性"}},[t._v("#")]),t._v(" LogicFlow 的能力和特性")]),t._v(" "),s("p",[t._v("LogicFlow 当前已具备了哪些能力呢，我会分两部分来介绍。")]),t._v(" "),s("h3",{attrs:{id:"快速搭建流程图编辑器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速搭建流程图编辑器"}},[t._v("#")]),t._v(" 快速搭建流程图编辑器")]),t._v(" "),s("p",[t._v("提供了一个流程图编辑所必需的各项能力，这也是 LogicFlow 的基础能力：")]),t._v(" "),s("ul",[s("li",[t._v("图的绘制能力。基于 SVG 来绘制形状各异的节点和线，并提供了基础的节点（矩形、圆形、多边形等）和线（直线、折线、曲线）")]),t._v(" "),s("li",[t._v("各类交互能力，让图动起来。根据节点、线、图的各类鼠标事件（hover、点击、拖拽等）做出反应。比如节点拖拽、拖拽创建连线、线的调整、双击节点编辑文本等")]),t._v(" "),s("li",[t._v("提升编辑效率的能力。提供网格、对齐线，上一步、下一步，键盘快捷键，图放大缩小等配套能力，帮助用户提升编辑效率")]),t._v(" "),s("li",[t._v("提供了丰富的 API ，宿主研发通过 API 传参调用和监听事件的方式，与 LogicFlow 完成交互")])]),t._v(" "),s("p",[t._v("通过以上能力，前端研发可以低成本、快速的搭建起流程可视化的应用，提供流畅的产品交互。下面是通过 LogicFlow 内置的节点和配套能力，做的流程图示例：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://dpubstatic.udache.com/static/dpubimg/eEMT14E7BR/lfexample1.gif",alt:"example1"}})]),t._v(" "),s("h3",{attrs:{id:"基于业务场景拓展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于业务场景拓展"}},[t._v("#")]),t._v(" 基于业务场景拓展")]),t._v(" "),s("p",[t._v("当基础能力无法满足业务需求的时候，便需要基于业务场景拓展。这也是 LogicFlow 能支持客服侧多个系统的关键所在。")]),t._v(" "),s("ul",[s("li",[t._v("设置图上所有元素的样式，比如各种节点、线、锚点、箭头、对齐线的大小颜色等，满足对前端样式调整的需求")]),t._v(" "),s("li",[t._v("API 拓展。支持在 LogicFlow 上注册自定义的方法，比如通过 API 拓展提供图片下载的方法")]),t._v(" "),s("li",[t._v("自定义节点、线。内置的矩形、圆形等图形类节点往往无法满足实际的业务需求，需要定义具有业务意义的节点。LogicFlow 提供了 的方式让用户定制具有自定义图形、业务数据的节点，比如流程审批场景中的 “审批” 节点")]),t._v(" "),s("li",[t._v("拓展组件。LogicFlow 在 SVG 图层上提供了 HTML 层和一系列坐标转换逻辑，并支持在 HTML 层注册组件。宿主研发可以通过 LogicFlow 的 API，基于任何 View 框架开发组件，比如节点的右键菜单、控制面板等")]),t._v(" "),s("li",[t._v("数据转换 adapter。LogicFlow 默认导出的图数据不一定适合所有业务，此时可以通过 adapter API，在图数据从 LogicFlow 输入、输出的时候做自定义转换，比如转换成 BPMN 规范的图数据")]),t._v(" "),s("li",[t._v("内置部分拓展能力。基于上述拓展能力，我们还单独提供了 extension 的包，用来存放客服业务下沉淀出的具有通用性的节点、组件等，比如面向 BPMN 规范的节点和数据 adapter，默认菜单。注意 extension 可以单独安装，并支持按需引入")])]),t._v(" "),s("p",[t._v("基于上述拓展的能力，前端研发能够根据实际业务场景的需求，灵活的开发出所需的节点、组件等。下面有两个基于 LogicFlow 拓展能力做出的流程图：")]),t._v(" "),s("p",[t._v("BPMN： http://logic-flow.org/examples/#/extension/bpmn")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://dpubstatic.udache.com/static/dpubimg/CS6S6q9Yxf/lfexample2.gif",alt:"图片:bpmn"}})]),t._v(" "),s("p",[t._v("审批流程：http://logic-flow.org/examples/#/extension/approve")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://dpubstatic.udache.com/static/dpubimg/uBeSlMEytL/lfexample3.gif",alt:"图片: 审批流"}})]),t._v(" "),s("h2",{attrs:{id:"实现原理和架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现原理和架构"}},[t._v("#")]),t._v(" 实现原理和架构")]),t._v(" "),s("h3",{attrs:{id:"整体架构图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#整体架构图"}},[t._v("#")]),t._v(" 整体架构图")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://dpubstatic.udache.com/static/dpubimg/fg7q5j_5nG/lfjk.png",alt:"图片: lfjk"}})]),t._v(" "),s("p",[t._v("核心包 "),s("code",[t._v("@logicflow/core")]),t._v(" 提供了流程图编辑器基础的能力，右边的 "),s("code",[t._v("@logicflow/extension")]),t._v(" 是基于 "),s("code",[t._v("@logicflow/core")]),t._v(" 的拓展性开发的插件。")]),t._v(" "),s("h3",{attrs:{id:"流程图编辑器的设计方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流程图编辑器的设计方案"}},[t._v("#")]),t._v(" 流程图编辑器的设计方案")]),t._v(" "),s("p",[t._v("主要介绍一下实现流程图编辑器重要的选型和方案设计。")]),t._v(" "),s("h4",{attrs:{id:"图渲染方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图渲染方案"}},[t._v("#")]),t._v(" 图渲染方案")]),t._v(" "),s("p",[t._v("前端绘制图形无非就是 HTML + CSS、Canvas、Svg 三种方式，我们综合做了一下对比，列出了相应的优劣势：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://dpubstatic.udache.com/static/dpubimg/-IgPkns3On/bijiao.png",alt:"bijiao1"}})]),t._v(" "),s("p",[t._v("在流程图的场景下，不需要渲染大量的节点（最多几千个元素），对于动画的诉求也不高。Svg 基于 DOM 的特性会更适合我们，一个是学习成本和开发成本更低，另一个是基于 DOM 可以做的拓展也更多。不过 Svg 标签内部并不支持插入其他比如 div 这种标签，所以在实现某些功能的时候，都需要结合其他 HTML 标签。")]),t._v(" "),s("p",[t._v("所以最终我们选择"),s("strong",[t._v("使用 HTML + Svg 来完成图的渲染，Svg 负责图形、线的部分，HTML 来实现文本、菜单、背景等图层")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"模块抽象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块抽象"}},[t._v("#")]),t._v(" 模块抽象")]),t._v(" "),s("p",[t._v("基于上述方案，下一步我们要做的是对实现一张流程图做分类和抽象。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://dpubstatic.udache.com/static/dpubimg/LsdAsOJ1r4/xuanranchouxiang.png",alt:"图片: mkcx"}})]),t._v(" "),s("p",[t._v("通过上图：")]),t._v(" "),s("ul",[s("li",[t._v("首先我们构建了多个图层来承担不同的职责，以方便实现功能和能力拓展。最上层的是 Svg 图层，所有图形（节点、线、对齐线、outLine 等）均在 Svg 上渲染，也负责监听图上的各种事件。Svg 下层的分别是组件层，负责拓展 UI 组件；Grid 层，负责渲染网格；背景层，添加自定义的背景。")]),t._v(" "),s("li",[t._v("Shape 的职责主要是基于 Svg 对图形渲染的封装，提供默认样式、把用户传入的属性做转换等，主要包含 Rect、Circle、Ellipse、Polygon、Path、PolyLine、Text 等，方便 LogicFlow 内部复用，比如圆形节点和锚点都需要 Circle。")]),t._v(" "),s("li",[t._v("基于 Shape，还实现了很多小元素，比如节点和线需要的锚点，比如线上的箭头等等。")]),t._v(" "),s("li",[t._v("而 BaseNode、BaseEdge 则是节点和线通用能力的封装，聚合 shape、锚点、文本，还封装了对事件和样式的处理等。通过继承 BaseNode，传入 shape 我们可以得到 RectNode、CircleNode 等可渲染的节点。")])]),t._v(" "),s("p",[t._v("因为流程图是富交互或者说是重编辑的，有了这几个基础的模块，接下来要做的就是富交互的方案设计，即用户在图上做的任何操作都要给出响应。比如我触发一个节点的拖拽，那关联的线可能需要跟着动，还能识别出在某个水平线上有没有其他节点（对齐线）。")]),t._v(" "),s("h4",{attrs:{id:"mvvm-virtual-dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mvvm-virtual-dom"}},[t._v("#")]),t._v(" MVVM + Virtual DOM")]),t._v(" "),s("p",[t._v("首先我们考虑到整个图编辑器具备很多状态存储，并且要实现编辑图上各模块的响应就必须要有状态的通信能力。第二如果要实现类似 redo/undo 这类功能，那整个图就一定需要根据数据得出渲染，即 fn(state) => View ，比较好的方式就是通过 Model 来驱动 View。")]),t._v(" "),s("p",[t._v("最终我们选择基于 MVVM，这个广泛被应用于当前前端工程中的设计模式来构建 LogicFlow 的图编辑器，定义图的 View 和 Model 层，使工程代码具备一定的解耦。与此同时，引入 Mobx 来实现我们的状态管理、数据响应的能力，一张图基于一份 Model 做状态的通信。此外，考虑 Mobx 的另一个原因是：只要我想，那就可以做到最细颗粒度的数据绑定（观测），可以减少没必要的渲染。")]),t._v(" "),s("p",[t._v("以下是 LogicFlow 图编辑器的 MVVM 示意图：\n"),s("img",{attrs:{src:"https://dpubstatic.udache.com/static/dpubimg/0o4_gZX0Ky/mvvm.png",alt:"图片: mvvm"}})]),t._v(" "),s("p",[t._v("通过上图可以看到，View 层（图、节点等）通过数据绑定，会在 Model 发生变化之后做出响应/更新。前面我们提到了关于图的渲染我们是基于 Svg + HTML 实现的，那要做 View 层的更新无非就是命令式和声明式两个选择：")]),t._v(" "),s("ul",[s("li",[t._v("命令式。比如 jQuery 的 api，"),s("code",[t._v("$('.rectNode').attrs({x: 1, y: 2})")]),t._v("，像这种方式操作 DOM 代码其实比较繁琐，在重交互的场景下写的代码会比较冗余。虽然我们最终找到了有一个库能够很方便的支持通过命令式的方式来绘图 —— antv/g")]),t._v(" "),s("li",[t._v("声明式。比如 React/Vue 这类 View 框架，其中一个比较核心的能力就是做到了 state => UI ，通过声明式的方式来构建 DOM，只要状态发生变化，那 UI 就更新")])]),t._v(" "),s("p",[t._v("除了考虑到命令式在操作 DOM 的场景下写代码会比较繁琐之外，还有一个原因就是操作 DOM 的成本问题，在基于 State 更新 UI 的设计下，我们自然而然想到了引入 Virtual DOM 来解决某些场景下的更新效率，这也可以一定程度上弥补「基于 Svg 渲染图形」可能造成的渲染性能问题。")]),t._v(" "),s("p",[t._v("总之，选择 MVVM 的设计模式并引入 Virtual DOM，最根本的两个原因便是提升我们图编辑器场景下的"),s("strong",[t._v("开发效率")]),t._v("，以及在 HTML + Svg 的图渲染方案下，可以追求"),s("strong",[t._v("更好的性能表现")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"事件系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件系统"}},[t._v("#")]),t._v(" 事件系统")]),t._v(" "),s("p",[t._v("介绍了在 “状态” 和 “响应” 我们做的设计，那要收集到用户的各类 “操作” 并及时上报和冒泡，就需要一套事件系统。最主要的就是复用和统一上报。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://dpubstatic.udache.com/static/dpubimg/YHNzhMl-w2/Event.png",alt:"图片: Event"}})]),t._v(" "),s("p",[t._v("复用即怎么保证所有节点和线都能具备默认的事件回调，以及针对复杂事件（拖拽）的处理逻辑如何共用。")]),t._v(" "),s("ul",[s("li",[t._v("Behavior。针对复杂事件的处理，我们做了 function 和 class 形式的封装，比如 Drag 是通过 mousemove、down、up 来模拟 h5 的 dragEnter、dragOver、dragEnd 和 drop 事件，DnD 则是通过抽象 dragsource 和 droptarget 两个实体来实现 drag 和 drop 的交互，比如拖拽创建节点")]),t._v(" "),s("li",[t._v("在前文模块抽象章节提到了内部有 BaseNode 和 BaseEdge 这样的抽象，内置节点和自定义的节点都通过继承基类来获得通用的能力，所以 LogicFlow 内部默认的事件回调实际是通过继承来复用的")]),t._v(" "),s("li",[t._v("EventCenter。通过事件总线做统一上报，把内部捕获到的所有用户行为事件，按照一定的规范和格式"),s("code",[t._v("emit(ev, args)")]),t._v("都上报到 EventCenter，最终冒泡到 LogicFlow 类，由 LogicFlow 类统一跟宿主交互。此外，图编辑器内任何地方也都可以通过 EventCenter 做事件的触发和监听")])]),t._v(" "),s("h4",{attrs:{id:"工具中心"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工具中心"}},[t._v("#")]),t._v(" 工具中心")]),t._v(" "),s("p",[t._v("工具中心的定位是解决某类特定问题的 utils，比如上面提到的 Behavior（复杂事件的封装） 和 EventCenter。此外，在图编辑的过程中，如果要实现比较好的交互效果，实际有很多复杂的计算逻辑要处理。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("坐标系。浏览器的 clientX、clientY 坐标系，以及 Svg 图本身的坐标系，当出现图的缩放和平移的时候，两个坐标系显然是不同的，那如何做坐标系的转换。")])]),t._v(" "),s("li",[s("p",[t._v("Algorithm。是专门通过几何、算法来处理可视化的一些问题。比如：\n当一个节点在同一方向有多条折线连出的时候，如何做路径的合并以展示起来更美观，如下")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://dpubstatic.udache.com/static/dpubimg/kml-1XH1t2/shili1.png",alt:"图片: shili1"}})]),t._v(" "),s("p",[t._v("如何计算出一根线到一个图形的切点，以达到线可以连接图形非锚点的位置，如下图")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://dpubstatic.udache.com/static/dpubimg/IwLtmEhGch/shili2.png",alt:"图片:shili2"}})])]),t._v(" "),s("li",[s("p",[t._v("History，主要提供 redo 和 undo 的能力。通过两个栈来存储 undos 和 redos，并限制最大长度，得益于 MVVM 的设计模式，能方便的做数据变化的观测和 Model 驱动 View。")])])]),t._v(" "),s("p",[t._v("关于这几部分的实现细节这里暂不展开，后面会有专题文章来介绍。")]),t._v(" "),s("h3",{attrs:{id:"可扩展性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可扩展性"}},[t._v("#")]),t._v(" 可扩展性")]),t._v(" "),s("p",[t._v("介绍完流程图编辑器的设计方案，现在来介绍 LogicFlow 的另一个重要特性，关于拓展性方面的设计。在程序世界中，小到一个 function，一个服务，再到一个开发框架 react，小程序开发框架，大到一个 Chrome 类的应用平台，都具备自己的可扩展性，这也是软件发展过程中要考虑的一种设计选择。对于 LogicFlow，是解决某个领域问题的开发框架，首先 API 要具备可扩展性；此外 LogicFlow 还提供了视图层，在 View 部分应该能够让用户做二次开发。这两个扩展的方向确定之后，最主要的还是结合业务需求，要能满足当前和未来一段时间内预见的业务场景，但也不能过度设计。")]),t._v(" "),s("h4",{attrs:{id:"api-上的设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-上的设计"}},[t._v("#")]),t._v(" API 上的设计")]),t._v(" "),s("p",[t._v("首先，LogicFlow 在面向用户使用这一层，完全是基于面向对象的设计模式封装的，最大的好处是几乎每个程序员都熟悉它的使用，使用成本低。通过下面初始化方式便可以了解。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" lf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogicFlow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实例化 lf 对象")]),t._v("\n  container"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#graph'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取渲染容器")]),t._v("\n  width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("700")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  background"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#F0F0F0'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  grid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dot'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    size"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" nodes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" edges"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在界面上渲染视图")]),t._v("\n")])])]),s("p",[t._v("通过 "),s("code",[t._v("class LogicFlow")]),t._v("，用户实例化一次便得到一个流程图的实例，状态也是私有的，各种使用方法通过 lf 的实例调用即可。\n关于 API 拓展的设计总结来看：")]),t._v(" "),s("ol",[s("li",[t._v("面向对象的设计模式， LogicFlow 内部做好封装，用户可以做继承、重写接口/方法")]),t._v(" "),s("li",[t._v("方法的设计。首先是要有固定类型的输入和输出。此外，LogicFlow 也提供了类似于 extends 的方法，通过  LogicFlow.use(fn) 在原型上拓展方法")]),t._v(" "),s("li",[t._v("通过观察者的模式做通信，即提供 on 方法供宿主订阅各类内部事件")]),t._v(" "),s("li",[t._v("图的数据可定制。无论是一个节点、线有哪些自定义的业务属性，还是流程图要导出什么样的数据，都应该能够定制。")])]),t._v(" "),s("h4",{attrs:{id:"插件化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件化"}},[t._v("#")]),t._v(" 插件化")]),t._v(" "),s("p",[t._v("View 层的拓展性，除了用户能够定制展现方式之外，最重要的是插件化，因为在流程可视化这条路上，不同的业务场景下需要的能力不尽相同，LogicFlow 很难做到支持所有的场景，所以提供好的插拔能力，让用户二次开发是比较好的选择。目前，在 UI 界面上，我们开放了两个能力：")]),t._v(" "),s("ol",[s("li",[t._v("节点和线支持二次开发，即自定义节点、线")]),t._v(" "),s("li",[t._v("可开发 UI 组件注册到 LogicFlow 的组件画布内")])]),t._v(" "),s("p",[t._v("基于插件化的思路，我们已经支持了不同的业务系统，并在这个过程中把一些稍微通用的能力沉淀出来，并封装到 lf-extension 包，比如用来支持 BPMN 规范的节点。目前 extension 内的拓展主要分了四类：UI 组件、自定义节点、API、adapter。关于插件的详细设计和实现后面也会有专门的文章介绍。")]),t._v(" "),s("h2",{attrs:{id:"未来规划"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#未来规划"}},[t._v("#")]),t._v(" 未来规划")]),t._v(" "),s("p",[t._v("2021.4 发布 v1.0。目前我们对 1.0 版本的定义为：")]),t._v(" "),s("ol",[s("li",[t._v("API 的易用性和丰富程度。因为 LogicFlow 还是一位新同学，要想进化为成熟好用的库还是需要经过大量用户和不同类型系统的验证，以及各位开发者的共建。具体的功能 scope 除了我们当前的迭代计划，还会根据用户的需求排出优先级后加入进来，也希望大家多多提意见和需求。这个方向的基调是保持 LogicFlow 流程可视化的定位，把 core 的 API 丰富，extension 的能力增强")]),t._v(" "),s("li",[t._v("更完善的文档和示例。主要是文档易读、完善、提供英文版，并能够有完整的示例和代码，供开发者 copy paste 代码")]),t._v(" "),s("li",[t._v("不仅是流程可视化库，期望提供整套解决方案。LogicFlow 只解决了前端流程图编辑的技术问题，但关于图数据的定义，流程最终如何被执行，还需要一个配套的流程引擎。目前，关于「流程引擎」我们团队也有相应的解决方案 —— turbo，后面 turbo 也会开源，我们会把 LogicFlow 和 turbo 做成端到端的解决方案，并提供完整的应用示例。大家拭目以待")])]),t._v(" "),s("h2",{attrs:{id:"最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),s("p",[t._v("相信你对 LogicFlow 已经有一个大概的认识了，如果在你负责的业务中也有流程可视化的诉求，并且有较高的拓展性需求，那 LogicFlow 会是一个好的选择。对于 LogicFlow 技术本身的实现细节、对于相似业务的探讨也都欢迎大家来交流。\n对于 LogicFlow 的拓展机制、连线的计算逻辑等对于可视化的一些思考，我们后续会有更多的文章介绍，尽情期待。")]),t._v(" "),s("ul",[s("li",[t._v("添加微信号进用户群：logic-flow")])])])}),[],!1,null,null,null);a.default=o.exports}}]);