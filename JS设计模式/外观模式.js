function A() {
	a1();
	a2();
};
function B() {
	b1();
	b2();
};

// 不需要知道A,B的内部实现细节
var f = function() {
	A();
	B();
};
f();