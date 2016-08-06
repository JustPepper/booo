var plugin = function(options){
  return function(style){
    var nodes = this.nodes;
    style.define('check', function( name, list ) {
        var list = options.disabled;
        var name = String(name);
        if ( list != null ) {
            var list = String(list).split(",");
            for (i = 0; i < list.length; i++) {
              if ( name === list[i] ) {
                  return false;
              }
            }
        }
        return true;
    });
  };
};
module.exports = plugin;