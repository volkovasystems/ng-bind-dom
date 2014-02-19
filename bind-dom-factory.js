try{ var base = window; }catch( error ){ base = exports; }
( function module( base ){
	define( "bindDOMFactory",
		[
			"angular"
		]
		function construct( ){
			var bindDOMFactory = function bindDOMFactory( moduleNamespace ){
				angular.module( moduleNamespace )
					.factory( "bindDOM",
						[
							function construct( ){
								return ( function bindDOM( scope, element, attributes, controller ){
									
								} );
							}
						] );
			};
			base.bindDOMFactory =  bindDOMFactory;
			return bindDOMFactory;
		} );
} )( base );