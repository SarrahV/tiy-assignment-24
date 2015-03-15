this["JST"] = this["JST"] || {};
this["JST"]["favorites"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<thead>\n  <tr>\n    <th>Artwork</th>\n    <th></th>\n    <th>Title</th>\n    <th>Genre</th>\n    <th>Duration</th>\n  </tr>\n</thead>\n<tbody>\n\n</tbody>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["nav"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<nav>\n  <ul class=\"top-nav\">\n    <li><a href=\"/\" data-name=\"home\">All Playlists</a></li>\n    <li><a href=\"/favorites\" data-name=\"favs\">Your Favorites</a></li>\n  </ul>\n</nav>\n<div class=\"search-box\">\n<div class=\"container-1\">\n  <span class=\"icon\"><i class=\"fa fa-search\"></i></span>\n  <input type=\"search\" id=\"search\" placeholder=\"Search...\" />\n</div>\n</div>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["playlists"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!-- box -->\n \n  <div class=\"link-box\">\n  <a href=\"#\" data-genre=\"rock\">\n    <div class=\"playlist rock\">\n            <h2>Rock</h2>\n    </div>\n    </a>\n    </div>\n       \n   <!-- box -->\n   <!-- box -->\n    \n   <div class=\"link-box\">\n   <a href=\"#\" data-genre=\"rap\">\n    <div class=\"playlist rap\">\n           <h2>Rap</h2>\n    </div>\n     </a>\n    </div>\n   \n   <!-- box -->\n   <!-- box -->\n   \n    <div class=\"link-box\">\n     <a href=\"#\" data-genre= \"ambient\">\n    <div class=\"playlist ambient\">\n           <h2>Ambient</h2>\n    </div>\n     </a>\n    </div>\n    \n   <!-- box -->\n   <!-- box -->\n   \n   <div class=\"link-box\">\n    <a href=\"#\" data-genre=\"country\">\n    <div class=\"playlist country\">\n           <h2>Country</h2>\n    </div>\n        </a>\n    </div>\n \n   <!-- box -->\n   <!-- box -->\n  \n   <div class=\"link-box\">\n    <a href=\"#\" data-genre=\"classical\">\n    <div class=\"playlist classical\">\n           <h2>Classical</h2>\n    </div>\n    </a>\n    </div>\n    \n   <!-- box -->\n   <!-- box -->\n  \n    <div class=\"link-box\">\n     <a href=\"#\" data-genre=\"Metal\">\n    <div class=\"dark playlist metal\">\n           <h2>Metal</h2>\n    </div>\n     </a>\n    </div>\n   \n   <!-- box -->\n   <!-- box -->\n  \n   <div class=\"link-box\">\n    <a href=\"#\" data-genre=\"jazz\">\n    <div class=\"playlist jazz\">\n           <h2>Jazz</h2>\n    </div>\n    </a>\n    </div>\n     \n   <!-- box -->\n   <!-- box -->\n   \n    <div class=\"link-box\">\n     <a href=\"#\" data-genre=\"indie\">\n    <div class=\"playlist indie\">\n           <h2>Indie</h2>\n    </div>\n      </a>\n    </div>\n  \n   <!-- box -->";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["track"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "  <i class=\"fa fa-play-circle\"></i>\n";
},"3":function(depth0,helpers,partials,data) {
    return "  <i class=\"fa fa-ban\"></i>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<td class=\"artwork\">\n  <img src=\""
    + alias3(((helper = (helper = helpers.artwork_url || (depth0 != null ? depth0.artwork_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"artwork_url","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n</td>\n<td class=\"play\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.streamable : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</td>\n<td class=\"title\">\n  <span>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</td>\n</td>\n<td class=\"genre\">\n  <span>"
    + alias3(((helper = (helper = helpers.genre || (depth0 != null ? depth0.genre : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"genre","hash":{},"data":data}) : helper)))
    + "</td>\n</td>\n<td class=\"duration\">\n  <span>"
    + alias3(((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"duration","hash":{},"data":data}) : helper)))
    + "</span>\n</td>\n<td>\n  <a href=\"#\" data-id="
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "><i class=\"fa fa-star\"></i></a>\n</td>\n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["track_collection"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<thead>\n  <tr>\n    <th>Artwork</th>\n    <th></th>\n    <th>Title</th>\n    <th>Genre</th>\n    <th>Duration</th>\n  </tr>\n</thead>\n<tbody>\n\n</tbody>";
},"useData":true});