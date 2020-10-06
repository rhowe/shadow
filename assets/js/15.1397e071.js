(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{366:function(t,s,n){"use strict";n.r(s);var a=n(42),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"controlling-jar-content-merging"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#controlling-jar-content-merging"}},[t._v("#")]),t._v(" Controlling JAR Content Merging")]),t._v(" "),n("p",[t._v("Shadow allows for customizing the process by which the output JAR is generated through the\n"),n("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/transformers/Transformer.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("Transformer")]),n("OutboundLink")],1),t._v(" interface.\nThis is a concept that has been carried over from the original Maven Shade implementation.\nA "),n("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/transformers/Transformer.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("Transformer")]),n("OutboundLink")],1),t._v(" is invoked for each\nentry in the JAR before being written to the final output JAR.\nThis allows a "),n("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/transformers/Transformer.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("Transformer")]),n("OutboundLink")],1),t._v(" to\ndetermine if it should process a particular entry and apply any modifications before writing the stream to the output.")]),t._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Adding a Transformer")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jengelman"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gradle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shadow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transformers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Transformer\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jengelman"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gradle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shadow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transformers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TransformerContext\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tools"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ZipOutputStream\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gradle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("file"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FileTreeElement\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTransformer")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Transformer")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("canTransformResource")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FileTreeElement element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TransformerContext context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasTransformedResource")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("modifyOutputStream")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ZipOutputStream jos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" preserveFileTimestamps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nshadowJar "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyTransformer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Additionally, a "),n("code",[t._v("Transformer")]),t._v(" can accept a "),n("code",[t._v("Closure")]),t._v(" to configure the provided "),n("code",[t._v("Transformer")]),t._v(".")]),t._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Configuring a Transformer")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jengelman"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gradle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shadow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transformers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Transformer\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jengelman"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gradle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shadow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transformers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TransformerContext\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tools"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ZipOutputStream\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gradle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("file"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FileTreeElement\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTransformer")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Transformer")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" enabled\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("canTransformResource")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FileTreeElement element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TransformerContext context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasTransformedResource")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("modifyOutputStream")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ZipOutputStream jos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" preserveFileTimestamps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nshadowJar "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyTransformer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    enabled "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("An instantiated instance of a "),n("code",[t._v("Transformer")]),t._v(" can also be provided.")]),t._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Adding a Transformer Instance")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jengelman"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gradle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shadow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transformers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Transformer\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jengelman"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gradle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shadow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transformers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TransformerContext\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tools"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ZipOutputStream\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gradle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("file"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FileTreeElement\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTransformer")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Transformer")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" enabled\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("canTransformResource")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FileTreeElement element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TransformerContext context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasTransformedResource")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("modifyOutputStream")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ZipOutputStream jos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" preserveFileTimestamps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nshadowJar "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyTransformer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("enabled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"merging-service-descriptor-files"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#merging-service-descriptor-files"}},[t._v("#")]),t._v(" Merging Service Descriptor Files")]),t._v(" "),n("p",[t._v("Java libraries often contain service descriptors files in the "),n("code",[t._v("META-INF/services")]),t._v(" directory of the JAR.\nA service descriptor typically contains a line delimited list of classes that are supported for a particular "),n("em",[t._v("service")]),t._v(".\nAt runtime, this file is read and used to configure library or application behavior.")]),t._v(" "),n("p",[t._v("Multiple dependencies may use the same service descriptor file name.\nIn this case, it is generally desired to merge the content of each instance of the file into a single output file.\nThe "),n("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/transformers/ServiceFileTransformer.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("ServiceFileTransformer")]),n("OutboundLink")],1),t._v("\nclass is used to perform this merging. By default, it will merge each copy of a file under "),n("code",[t._v("META-INF/services")]),t._v(" into a\nsingle file in the output JAR.")]),t._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Merging Service Files")]),t._v("\nshadowJar "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeServiceFiles")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("The above code snippet is a convenience syntax for calling\n"),n("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/tasks/ShadowJar.html#transform(Class%3C?%20extends%20Transformer%3E)",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("transform(ServiceFileTransformer.class)")]),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("blockquote",[n("p",[t._v("Groovy Extension Module descriptor files (located at "),n("code",[t._v("META-INF/services/org.codehaus.groovy.runtime.ExtensionModule")]),t._v(")\nare ignored by the "),n("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/transformers/ServiceFileTransformer.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("ServiceFileTransformer")]),n("OutboundLink")],1),t._v(".\nThis is due to these files having a different syntax than standard service descriptor files.\nUse the "),n("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/tasks/ShadowJar.html#mergeGroovyExtensionModules()",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("mergeGroovyExtensionModules()")]),n("OutboundLink")],1),t._v(" method to merge\nthese files if your dependencies contain them.")])]),t._v(" "),n("h3",{attrs:{id:"configuring-the-location-of-service-descriptor-files"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-location-of-service-descriptor-files"}},[t._v("#")]),t._v(" Configuring the Location of Service Descriptor Files")]),t._v(" "),n("p",[t._v("By default the "),n("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/transformers/ServiceFileTransformer.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("ServiceFileTransformer")]),n("OutboundLink")],1),t._v("\nis configured to merge files in "),n("code",[t._v("META-INF/services")]),t._v(".\nThis directory can be overridden to merge descriptor files in a different location.")]),t._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Merging Service Files in a Specific Directory")]),t._v("\nshadowJar "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mergeServiceFiles "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'META-INF/custom'")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h4",{attrs:{id:"excluding-including-specific-service-descriptor-files-from-merging"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#excluding-including-specific-service-descriptor-files-from-merging"}},[t._v("#")]),t._v(" Excluding/Including Specific Service Descriptor Files From Merging")]),t._v(" "),n("p",[t._v("The "),n("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/transformers/ServiceFileTransformer.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("ServiceFileTransformer")]),n("OutboundLink")],1),t._v("\nclass supports specifying specific files to include or exclude from merging.")]),t._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Excluding a Service Descriptor From Merging")]),t._v("\nshadowJar "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mergeServiceFiles "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    exclude "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'META-INF/services/com.acme.*'")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"merging-groovy-extension-modules"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#merging-groovy-extension-modules"}},[t._v("#")]),t._v(" Merging Groovy Extension Modules")]),t._v(" "),n("p",[t._v("Shadow provides a specific transformer for dealing with Groovy extension module files.\nThis is due to their special syntax and how they need to be merged together.\nThe "),n("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/transformers/GroovyExtensionModuleTransformer.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("GroovyExtensionModuleTransformer")]),n("OutboundLink")],1),t._v("\nwill handle these files.\nThe "),n("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/tasks/ShadowJar.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("ShadowJar")]),n("OutboundLink")],1),t._v(" task also provides a short syntax\nmethod to add this transformer.")]),t._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Merging Groovy Extension Modules")]),t._v("\nshadowJar "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeGroovyExtensionModules")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"appending-text-files"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#appending-text-files"}},[t._v("#")]),t._v(" Appending Text Files")]),t._v(" "),n("p",[t._v("Generic text files can be appended together using the\n"),n("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/transformers/AppendingTransformer.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("AppendingTransformer")]),n("OutboundLink")],1),t._v(".\nEach file is appended using new lines to separate content.\nThe "),n("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/tasks/ShadowJar.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("ShadowJar")]),n("OutboundLink")],1),t._v(" task provides a short syntax\nmethod of\n"),n("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/tasks/ShadowJar.html#append(java.lang.String)",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("append(String)")]),n("OutboundLink")],1),t._v(" to\nconfigure this transformer.")]),t._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Appending a Property File")]),t._v("\nshadowJar "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  append "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test.properties'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"appending-xml-files"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#appending-xml-files"}},[t._v("#")]),t._v(" Appending XML Files")]),t._v(" "),n("p",[t._v("XML files require a special transformer for merging.\nThe "),n("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/transformers/XmlAppendingTransformer.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("XmlAppendingTransformer")]),n("OutboundLink")],1),t._v("\nreads each XML document and merges each root element into a single document.\nThere is no short syntax method for the "),n("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/transformers/XmlAppendingTransformer.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("XmlAppendingTransformer")]),n("OutboundLink")],1),t._v(".\nIt must be added using the "),n("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/api/com/github/jengelman/gradle/plugins/shadow//tasks/ShadowJar.html#transform(Class%3C?%20Fextends%20Transformer%3E)",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("transform")]),n("OutboundLink")],1),t._v(" methods.")]),t._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Appending a XML File")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jengelman"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gradle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shadow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transformers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XmlAppendingTransformer\n\nshadowJar "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("XmlAppendingTransformer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    resource "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'properties.xml'")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);