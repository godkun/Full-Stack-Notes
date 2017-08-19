// 惰性单例，只在需要的时候才创建实例

Singleton.getInstance = (function(){
		var instance = null;
		return function( name ){
			if ( !instance ){
				instance = new Singleton( name );
			}
			return instance;
		}
	})();