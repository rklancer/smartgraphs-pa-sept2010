(function(){var a="sproutcore/ace";if(!SC.BUNDLE_INFO){throw"SC.BUNDLE_INFO is not defined!"
}if(SC.BUNDLE_INFO[a]){return}SC.BUNDLE_INFO[a]={requires:["sproutcore/empty_theme"],styles:["/static/sproutcore/ace/en/2d2184ebd6ba3b5a208dc7da5f58866092f21543/stylesheet-packed.css","/static/sproutcore/ace/en/2d2184ebd6ba3b5a208dc7da5f58866092f21543/stylesheet.css"],scripts:["/static/sproutcore/ace/en/2d2184ebd6ba3b5a208dc7da5f58866092f21543/javascript-packed.js","/static/sproutcore/ace/en/2d2184ebd6ba3b5a208dc7da5f58866092f21543/javascript.js"]}
})();SC.stringsFor("English",{});Docs=SC.Object.create({NAMESPACE:"Docs",VERSION:"0.1.0",store:SC.Store.create().from(SC.Record.fixtures)});
Docs.mainPage=SC.Page.design({mainPane:SC.MainPane.design({childViews:"labelView".w(),labelView:SC.LabelView.design({layout:{centerX:0,centerY:0,width:100,height:18},tagName:"h1",value:"Hello World"})})});
Docs.main=function main(){Docs.getPath("mainPage.mainPane").append()};function main(){Docs.main()
};