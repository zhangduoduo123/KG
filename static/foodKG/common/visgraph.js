;
(function() {
	function Element() {
		this.initialize = function() {
			this.elementType = "element", this.serializedProperties = ["elementType"], this.propertiesStack = [], this._id = "" + (new Date).getTime()
		}, this.distroy = function() {}, this.removeHandler = function() {}, this.attr = function(a, b) {
			if (null != name && null != value) {
				this[name] = value
			} else if (null != name) {
				return this[name]
			}
			return this
		}, this.save = function() {
			var a = this;
			var b = {};
			this.serializedProperties.forEach(function(properties) {
				b[properties] = a[properties]
			});
			this.propertiesStack.push(b)
		}, this.restore = function() {
			if (null != this.propertiesStack && 0 != this.propertiesStack.length) {
				var a = this,
					b = this.propertiesStack.pop();
				this.serializedProperties.forEach(function(c) {
					a[c] = b[c]
				})
			}
		}
	}
	CanvasRenderingContext2D.prototype.DGraphRoundRect = function(x, y, width, height, borderRadius) {
		if ("undefined" == typeof borderRadius) {
			borderRadius = 5
		}
		this.beginPath();
		this.moveTo(x + borderRadius, y);
		this.lineTo(x + width - borderRadius, y);
		this.quadraticCurveTo(x + width, y, x + width, y + borderRadius);
		this.lineTo(x + width, y + height - borderRadius);
		this.quadraticCurveTo(x + width, y + height, x + width - borderRadius, y + height);
		this.lineTo(x + borderRadius, y + height);
		this.quadraticCurveTo(x, y + height, x, y + height - borderRadius);
		this.lineTo(x, y + borderRadius);
		this.quadraticCurveTo(x, y, x + borderRadius, y);
		this.closePath()
	}, CanvasRenderingContext2D.prototype.DGraphDashedLineTo = function(a, b, c, d, e) {
		"undefined" == typeof e && (e = 5);
		var f = c - a,
			g = d - b,
			h = Math.floor(Math.sqrt(f * f + g * g)),
			i = 0 >= e ? h : h / e,
			j = g / h * e,
			k = f / h * e;
		this.beginPath();
		for (var l = 0; i > l; l++) l % 2 ? this.lineTo(a + l * k, b + l * j) : this.moveTo(a + l * k, b + l * j);
		this.stroke()
	};
	const DGraph = {
		version: "2.1.0",
		zIndex_Box: 1,
		zIndex_Link: 2,
		zIndex_Node: 3,
		SceneMode: {
			normal: "normal",
			drag: "drag",
			edit: "edit",
			select: "select"
		},
		MouseCursor: {
			normal: "default",
			pointer: "pointer",
			top_left: "nw-resize",
			top_center: "n-resize",
			top_right: "ne-resize",
			middle_left: "e-resize",
			middle_right: "e-resize",
			bottom_left: "ne-resize",
			bottom_center: "n-resize",
			bottom_right: "nw-resize",
			move: "move",
			open_hand: null,
			closed_hand: null
		},
		Element: Element
	};
	!
		function(DGraph) {
			function MessageBus(a) {
				var b = this;
				this.name = a, this.messageMap = {}, this.messageCount = 0, this.subscribe = function(a, c) {
					var d = b.messageMap[a];
					null == d && (b.messageMap[a] = []), b.messageMap[a].push(c), b.messageCount++
				}, this.unsubscribe = function(a) {
					var c = b.messageMap[a];
					null != c && (b.messageMap[a] = null, delete b.messageMap[a], b.messageCount--)
				}, this.publish = function(a, c, d) {
					var e = b.messageMap[a];
					if (null != e) for (var f = 0; f < e.length; f++) d ? !
						function(a, b) {
							setTimeout(function() {
								a(b)
							}, 10)
						}(e[f], c) : e[f](c)
				}
			}
			function getDistance(a, b, c, d) {
				var e, f;
				return null == c && null == d ? (e = b.x - a.x, f = b.y - a.y) : (e = c - a, f = d - b), Math.sqrt(e * e + f * f)
			}
			function getElementsBound(a) {
				for (var b = {
					left: Number.MAX_VALUE,
					right: Number.MIN_VALUE,
					top: Number.MAX_VALUE,
					bottom: Number.MIN_VALUE
				}, c = 0; c < a.length; c++) {
					var d = a[c];
					if (d instanceof DGraph.Link) {
						continue
					}
					if (d.visible == true) {
						(b.left > d.x && (b.left = d.x, b.leftNode = d), b.right < d.x + d.width && (b.right = d.x + d.width, b.rightNode = d), b.top > d.y && (b.top = d.y, b.topNode = d), b.bottom < d.y + d.height && (b.bottom = d.y + d.height, b.bottomNode = d))
					}
				}
				return b.width = b.right - b.left, b.height = b.bottom - b.top, b
			}
			function mouseCoords(a) {
				return a = cloneEvent(a), a.pageX || (a.pageX = a.clientX + document.body.scrollLeft - document.body.clientLeft, a.pageY = a.clientY + document.body.scrollTop - document.body.clientTop), a
			}
			function getEventPosition(a) {
				return a = mouseCoords(a)
			}
			function rotatePoint(a, b, c, d, e) {
				var f = c - a,
					g = d - b,
					h = Math.sqrt(f * f + g * g),
					i = Math.atan2(g, f) + e;
				return {
					x: a + Math.cos(i) * h,
					y: b + Math.sin(i) * h
				}
			}
			function rotatePoints(a, b, c) {
				for (var d = [], e = 0; e < b.length; e++) {
					var f = rotatePoint(a.x, a.y, b[e].x, b[e].y, c);
					d.push(f)
				}
				return d
			}
			function cloneEvent(a) {
				var b = {};
				for (var c in a)"returnValue" != c && "keyLocation" != c && (b[c] = a[c]);
				return b
			}
			function clone(a) {
				var b = {};
				for (var c in a) b[c] = a[c];
				return b
			}
			function isPointInRect(a, b) {
				var c = b.x,
					d = b.y,
					e = b.width,
					f = b.height;
				return a.x > c && a.x < c + e && a.y > d && a.y < d + f
			}
			function isPointInLine(a, b, c) {
				var d = DGraph.util.getDistance(b, c),
					e = DGraph.util.getDistance(b, a),
					f = DGraph.util.getDistance(c, a),
					g = Math.abs(e + f - d) <= .5;
				return g
			}
			function removeFromArray(a, b) {  //todo 遍历查询b在a中位置，并删除
				for (var c = 0; c < a.length; c++) {
					var d = a[c];
					if (d === b) {
						a = a.del(c);
						break
					}
				}
				return a
			}
			function randomColor() {
				return Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random())
			}
			function isIntsect() {}
			function getProperties(a, b) {
				for (var c = "", d = 0; d < b.length; d++) {
					d > 0 && (c += ",");
					var e = a[b[d]];
					"string" == typeof e ? e = '"' + e + '"' : void 0 == e && (e = null), c += b[d] + ":" + e
				}
				return c
			}
			function changeColor(a, b, c, d, e) {
				var f = canvas.width = b.width,
					g = canvas.height = b.height;
				a.clearRect(0, 0, canvas.width, canvas.height), a.drawImage(b, 0, 0);
				for (var h = a.getImageData(0, 0, b.width, b.height), i = h.data, j = 0; f > j; j++) for (var k = 0; g > k; k++) {
					var l = 4 * (j + k * f);
					0 != i[l + 3] && (null != c && (i[l + 0] += c), null != d && (i[l + 1] += d), null != e && (i[l + 2] += e))
				}
				a.putImageData(h, 0, 0, 0, 0, b.width, b.height);
				var m = canvas.toDataURL();
				return alarmImageCache[b.src] = m, m
			}
			function genImageAlarm(a, b) {
				null == b && (b = 255);
				try {
					if (alarmImageCache[a.src]) return alarmImageCache[a.src];
					var c = new Image;
					return c.src = changeColor(graphics, a, b), alarmImageCache[a.src] = c, c
				} catch (d) {}
				return null
			}
			function getOffsetPosition(a) {
				if (!a) return {
					left: 0,
					top: 0
				};
				var b = 0,
					c = 0;
				if ("getBoundingClientRect" in document.documentElement) var d = a.getBoundingClientRect(),
					e = a.ownerDocument,
					f = e.body,
					g = e.documentElement,
					h = g.clientTop || f.clientTop || 0,
					i = g.clientLeft || f.clientLeft || 0,
					b = d.top + (self.pageYOffset || g && g.scrollTop || f.scrollTop) - h,
					c = d.left + (self.pageXOffset || g && g.scrollLeft || f.scrollLeft) - i;
				else do b += a.offsetTop || 0, c += a.offsetLeft || 0, a = a.offsetParent;
				while (a);
				return {
					left: c,
					top: b
				}
			}
			function lineF(a, b, c, d) {
				function e(a) {
					return a * f + g
				}
				var f = (d - b) / (c - a),
					g = b - a * f;
				return e.k = f, e.b = g, e.x1 = a, e.x2 = c, e.y1 = b, e.y2 = d, e
			}
			function inRange(a, b, c) {
				var d = Math.abs(b - c),
					e = Math.abs(b - a),
					f = Math.abs(c - a),
					g = Math.abs(d - (e + f));
				return 1e-6 > g ? !0 : !1
			}
			function isPointInLineSeg(a, b, c) {
				return inRange(a, c.x1, c.x2) && inRange(b, c.y1, c.y2)
			}
			function intersection(a, b) {
				var c, d;
				return a.k == b.k ? null : (1 / 0 == a.k || a.k == -1 / 0 ? (c = a.x1, d = b(a.x1)) : 1 / 0 == b.k || b.k == -1 / 0 ? (c = b.x1, d = a(b.x1)) : (c = (b.b - a.b) / (a.k - b.k), d = a(c)), 0 == isPointInLineSeg(c, d, a) ? null : 0 == isPointInLineSeg(c, d, b) ? null : {
					x: c,
					y: d
				})
			}
			function intersectionLineBound(a, b) {
				var c = DGraph.util.lineF(b.left, b.top, b.left, b.bottom),
					d = DGraph.util.intersection(a, c);
				return null == d && (c = DGraph.util.lineF(b.left, b.top, b.right, b.top), d = DGraph.util.intersection(a, c), null == d && (c = DGraph.util.lineF(b.right, b.top, b.right, b.bottom), d = DGraph.util.intersection(a, c), null == d && (c = DGraph.util.lineF(b.left, b.bottom, b.right, b.bottom), d = DGraph.util.intersection(a, c)))), d
			}
			requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ||
				function(a) {
					setTimeout(a, 1000 / 24)
				}, Array.prototype.del = function(a) {  //todo del方法的具体实现
				if ("number" != typeof a) {
					for (var b = 0; b < this.length; b++) if (this[b] === a) return this.slice(0, b).concat(this.slice(b + 1, this.length));
					return this
				}
				return 0 > a ? this : this.slice(0, a).concat(this.slice(a + 1, this.length))
			}, [].indexOf || (Array.prototype.indexOf = function(a) {
				for (var b = 0; b < this.length; b++) if (this[b] === a) return b;
				return -1
			});
			var canvas = document.createElement("canvas"),
				graphics = canvas.getContext("2d"),
				alarmImageCache = {};
			DGraph.util = {
				rotatePoint: rotatePoint,
				rotatePoints: rotatePoints,
				getDistance: getDistance,
				getEventPosition: getEventPosition,
				mouseCoords: mouseCoords,
				MessageBus: MessageBus,
				isFirefox: navigator.userAgent.indexOf("Firefox") > 0,
				isIE: !(!window.attachEvent || -1 !== navigator.userAgent.indexOf("Opera")),
				isChrome: null != navigator.userAgent.toLowerCase().match(/chrome/),
				clone: clone,
				isPointInRect: isPointInRect,
				isPointInLine: isPointInLine,
				removeFromArray: removeFromArray,
				cloneEvent: cloneEvent,
				randomColor: randomColor,
				isIntsect: isIntsect,
				getElementsBound: getElementsBound,
				genImageAlarm: genImageAlarm,
				getOffsetPosition: getOffsetPosition,
				lineF: lineF,
				intersection: intersection,
				intersectionLineBound: intersectionLineBound
			}
		}(DGraph), function(a) {
		function b(a) {
			return {
				hgap: 2,
				visible: !1,
				exportCanvas: document.createElement("canvas"),
				getImage: function(b, c, type) {
					var d = a.getBound(),
						scaleX = 1,
						scaleY = 1;
					var rectWidth = d.width,
						rectHeight = d.height;
					var paddingX = 0,
						paddingY = 0;
					if (null != b && null != c) {
						if (d.leftNode.elementType == 'node' && d.rightNode.elementType == 'node') {
							paddingX = (d.leftNode.radius * d.leftNode.scaleX + d.rightNode.radius * d.rightNode.scaleX);
							paddingY = (d.topNode.radius * d.topNode.scaleY + d.bottomNode.radius * d.bottomNode.scaleY)
						}
						var realWidth = Math.min(b, rectWidth),
							realHeight = Math.min(c, rectHeight);
						this.exportCanvas.width = realWidth + paddingX, this.exportCanvas.height = realHeight + paddingY;
						var scaleX = realWidth / rectWidth,
							scaleY = realHeight / rectHeight
					} else {
						this.exportCanvas.width = Math.max(rectWidth, a.canvas.width);
						this.exportCanvas.height = Math.max(rectHeight, a.canvas.height)
					}
					var g = this.exportCanvas.getContext("2d");
					return a.childs.length > 0 && (g.save(), g.clearRect(0, 0, this.exportCanvas.width, this.exportCanvas.height), a.childs.forEach(function(a) {
						1 == a.visible && (a.save(), a.translateX = 0, a.translateY = 0, a.scaleX = 1, a.scaleY = 1, g.scale(scaleX, scaleY), d.left < 0 && (a.translateX = Math.abs(d.left) + paddingX), d.top < 0 && (a.translateY = Math.abs(d.top) + paddingY), a.repaint(g), a.restore())
					}), g.restore()), this.exportCanvas.toDataURL('image/' + (type || 'png'))
				},
				getImageUrlData: function(b, c, type) {
					var d = a.getBound();
					if (d.width < 0) {
						return null
					}
					var rectWidth = d.width,
						rectHeight = d.height;
					var scale = null;
					var paddingX = 0,
						paddingY = 0;
					if (d.leftNode.elementType == 'node' && d.rightNode.elementType == 'node') {
						paddingX = (d.leftNode.radius * d.leftNode.scaleX + d.rightNode.radius * d.rightNode.scaleX);
						paddingY = (d.topNode.radius * d.topNode.scaleY + d.bottomNode.radius * d.bottomNode.scaleY)
					}
					rectWidth += paddingX;
					rectHeight += paddingY;
					this.width = this.exportCanvas.width = Math.min(b, rectWidth), this.height = this.exportCanvas.height = Math.min(c, rectHeight);
					scale = Math.min(this.width / rectWidth, this.height / rectHeight);
					if (rectWidth < 500 || rectHeight < 500) {
						var width = Math.max(Math.max(rectWidth, rectHeight), 500);
						this.width = this.exportCanvas.width = width;
						this.height = this.exportCanvas.height = width;
						scale = 1
					}
					var e = this.exportCanvas.getContext("2d");
					if (a.childs.length > 0) {
						a.childs.forEach(function(a) {
							1 == a.visible && (a.save(), a.centerAndZoom(scale, scale, e), a.repaint(e), a.restore())
						});
						var l = null;
						try {
							l = this.exportCanvas.toDataURL('image/' + (type || 'png'))
						} catch (m) {}
						return l
					}
					return null
				},
				canvas: document.createElement("canvas"),
				update: function() {
					this.eagleImageDatas = this.getData(a)
				},
				setSize: function(a, b) {
					this.width = this.canvas.width = a, this.height = this.canvas.height = b
				},
				getData: function(b, c) {
					function d(a) {
						var b = a.stage.canvas.width,
							c = a.stage.canvas.height,
							d = b / a.scaleX / 2,
							e = c / a.scaleY / 2;
						return {
							translateX: a.translateX + d - d * a.scaleX,
							translateY: a.translateY + e - e * a.scaleY
						}
					}
					null != j && null != k ? this.setSize(b, c) : this.setSize(200, 160);
					var bound = a.getBound();
					if (bound.width < 0) {
						return null
					}
					var scale = null;
					var scaleX = 200 / bound.width;
					var scaleY = 160 / bound.height;
					scale = Math.min(scaleX, scaleY);
					var e = this.canvas.getContext("2d");
					if (a.childs.length > 0) {
						e.save(), e.clearRect(0, 0, this.canvas.width, this.canvas.height), a.childs.forEach(function(a) {
							1 == a.visible && (a.save(), a.centerAndZoom(scale, scale, e), a.repaint(e), a.restore())
						});
						var f = d(a.childs[0]),
							g = f.translateX * (this.canvas.width / a.canvas.width) * a.childs[0].scaleX,
							h = f.translateY * (this.canvas.height / a.canvas.height) * a.childs[0].scaleY,
							i = a.getBound(),
							j = a.canvas.width / a.childs[0].scaleX / i.width,
							k = a.canvas.height / a.childs[0].scaleY / i.height;
						j > 1 && (j = 1), k > 1 && (j = 1), g *= j, h *= k, i.left < 0 && (g -= Math.abs(i.left) * (this.width / i.width)), i.top < 0 && (h -= Math.abs(i.top) * (this.height / i.height)), e.save(), e.lineWidth = 1, e.strokeStyle = "rgba(0,250,0,1)", e.strokeRect(-g, -h, e.canvas.width * j, e.canvas.height * k), e.restore();
						var l = null;
						try {
							l = e.getImageData(0, 0, e.canvas.width, e.canvas.height)
						} catch (m) {}
						return l
					}
					return null
				},
				paint: function() {
					if (null != this.eagleImageDatas) {
						var b = a.graphics;
						b.beginPath(), b.save(), b.fillStyle = "rgba(30,250,3,0.3)", b.fillRect(a.canvas.width - this.canvas.width - 2 * this.hgap, a.canvas.height - this.canvas.height - 1, a.canvas.width - this.canvas.width, this.canvas.height + 1), b.fill(), b.save(), b.lineWidth = 1, b.strokeStyle = "rgba(100,100,100,1)", b.rect(a.canvas.width - this.canvas.width - 2 * this.hgap, a.canvas.height - this.canvas.height - 1, a.canvas.width - this.canvas.width, this.canvas.height + 1), b.stroke(), b.save(), b.putImageData(this.eagleImageDatas, a.canvas.width - this.canvas.width - this.hgap, a.canvas.height - this.canvas.height), b.restore(), b.closePath()
					} else {
						this.eagleImageDatas = this.getData(a)
					}
				},
				eventHandler: function(a, b, c) {
					var d = b.x,
						e = b.y;
					if (d > c.canvas.width - this.canvas.width && e > c.canvas.height - this.canvas.height) {
						if (d = b.x - this.canvas.width, e = b.y - this.canvas.height, "mousedown" == a && (this.lastTranslateX = c.childs[0].translateX, this.lastTranslateY = c.childs[0].translateY), "mousedrag" == a && c.childs.length > 0) {
							var f = b.dx,
								g = b.dy,
								h = c.getBound(),
								i = this.canvas.width / c.childs[0].scaleX / h.width,
								j = this.canvas.height / c.childs[0].scaleY / h.height;
							c.childs[0].translateX = this.lastTranslateX - f / i, c.childs[0].translateY = this.lastTranslateY - g / j
						}
					}
				}
			}
		};

		function c(container) {
			let c = document.createElement("canvas");
			c.style.position = 'relative';
			c.style.width = '100%';
			c.style.height = '100%';
			container.appendChild(c);
			let ratio = getRatio(c);
			c.width = Math.round(c.clientWidth * ratio);
			c.height = Math.round(c.clientHeight * ratio);
			let resizeTimer = setInterval(() => {
				var nowWidth = Math.round(c.clientWidth * ratio);
				var nowHeight = Math.round(c.clientHeight * ratio);
				if (c.width != nowWidth || c.height != nowHeight) {
				c.width = nowWidth;
				c.height = nowHeight
			}
		}, 1000);

			function d(b) {
				var c = a.util.getEventPosition(b),
					d = a.util.getOffsetPosition(n.canvas);
				return c.offsetLeft = c.pageX - d.left, c.offsetTop = c.pageY - d.top, c.x = c.offsetLeft * ratio, c.y = c.offsetTop * ratio, c.target = null, c
			}
			function getRatio(canvas) {
				let ctx = canvas.getContext("2d");
				if (ctx === undefined) {
					return
				}
				var numerator = 1;
				if (typeof window !== 'undefined') {
					numerator = (window.devicePixelRatio || 1)
				}
				var denominator = (ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1);
				return numerator / denominator
			}
			function e(a) {
				document.onselectstart = function() {
					return !1
				}, this.mouseOver = !0;
				var b = d(a);
				n.dispatchEventToScenes("mouseover", b), n.dispatchEvent("mouseover", b)
			}
			function f(a) {
				p = setTimeout(function() {
					o = !0
				}, 500), document.onselectstart = function() {
					return !0
				};
				var b = d(a);
				n.dispatchEventToScenes("mouseout", b), n.dispatchEvent("mouseout", b), n.needRepaint = 0 == n.animate ? !1 : !0
			}
			function g(a) {
				var b = d(a);
				n.mouseDown = !0, n.mouseDownX = b.x, n.mouseDownY = b.y, n.dispatchEventToScenes("mousedown", b), n.dispatchEvent("mousedown", b)
			}
			function h(a) {
				var b = d(a);
				n.dispatchEventToScenes("mouseup", b), n.dispatchEvent("mouseup", b), n.mouseDown = !1, n.needRepaint = 0 == n.animate ? !1 : !0
			}
			function i(a) {
				p && (window.clearTimeout(p), p = null), o = !1;
				var b = d(a);
				n.mouseDown ? 0 == a.button && (b.dx = b.x - n.mouseDownX, b.dy = b.y - n.mouseDownY, n.dispatchEventToScenes("mousedrag", b), n.dispatchEvent("mousedrag", b), 1 == n.eagleEye.visible && n.eagleEye.update()) : (n.dispatchEventToScenes("mousemove", b), n.dispatchEvent("mousemove", b))
			}
			function j(a) {
				var b = d(a);
				n.dispatchEventToScenes("click", b), n.dispatchEvent("click", b)
			}
			function k(a) {
				var b = d(a);
				n.dispatchEventToScenes("dbclick", b), n.dispatchEvent("dbclick", b)
			}
			function l(a) {
				var b = d(a);
				n.dispatchEventToScenes("mousewheel", b), n.dispatchEvent("mousewheel", b), null != n.wheelZoom && (a.preventDefault ? a.preventDefault() : (a = a || window.event, a.returnValue = !1), 1 == n.eagleEye.visible && n.eagleEye.update())
			}
			function m(b) {
				a.util.isIE || !window.addEventListener ? (b.onmouseout = f, b.onmouseover = e, b.onmousedown = g, b.onmouseup = h, b.onmousemove = i, b.onclick = j, b.ondblclick = k, b.onmousewheel = l, b.touchstart = g, b.touchmove = i, b.touchend = h) : (b.addEventListener("mouseout", f), b.addEventListener("mouseover", e), b.addEventListener("mousedown", g), b.addEventListener("mouseup", h), b.addEventListener("mousemove", i), b.addEventListener("click", j), b.addEventListener("dblclick", k), a.util.isFirefox ? b.addEventListener("DOMMouseScroll", l) : b.addEventListener("mousewheel", l)), window.addEventListener && (window.addEventListener("keydown", function(b) {
					n.dispatchEventToScenes("keydown", a.util.cloneEvent(b));
					var c = b.keyCode;
					(37 == c || 38 == c || 39 == c || 40 == c) && (b.preventDefault ? b.preventDefault() : (b = b || window.event, b.returnValue = !1))
				}, !0), window.addEventListener("keyup", function(b) {
					n.dispatchEventToScenes("keyup", a.util.cloneEvent(b));
					var c = b.keyCode;
					(37 == c || 38 == c || 39 == c || 40 == c) && (b.preventDefault ? b.preventDefault() : (b = b || window.event, b.returnValue = !1))
				}, !0))
			}
			a.stage = this;
			var n = this;
			this.initialize = function(c) {
				m(c), this.canvas = c, this.graphics = c.getContext("2d"), this.childs = [], this.frames = 24, this.messageBus = new a.util.MessageBus, this.eagleEye = b(this), this.wheelZoom = null, this.mouseDownX = 0, this.mouseDownY = 0, this.mouseDown = !1, this.mouseOver = !1, this.needRepaint = !0, this.serializedProperties = ["frames", "wheelZoom"], this.pixelRatio = getRatio(c)
			}, null != c && this.initialize(c);
			var o = !0,
				p = null;
			document.oncontextmenu = function() {
				return o
			}, this.dispatchEventToScenes = function(a, b) {
				if (0 != this.frames && (this.needRepaint = !0), 1 == this.eagleEye.visible && -1 != a.indexOf("mouse")) {
					var c = b.x,
						d = b.y;
					if (c > this.width - this.eagleEye.width && d > this.height - this.eagleEye.height) return void this.eagleEye.eventHandler(a, b, this)
				}
				this.childs.forEach(function(c) {
					if (1 == c.visible) {
						var d = c[a + "Handler"];
						if (null == d) throw new Error("Function not found:" + a + "Handler");
						d.call(c, b)
					}
				})
			}, this.add = function(a) {
				for (var b = 0; b < this.childs.length; b++) if (this.childs[b] === a) return;
				a.addTo(this), this.childs.push(a)
			}, this.remove = function(a) {
				if (null == a) throw new Error("Stage.remove出错: 参数为null!");
				for (var b = 0; b < this.childs.length; b++) if (this.childs[b] === a) return a.stage = null, this.childs = this.childs.del(b), this;
				return this
			}, this.clear = function() {
				this.childs = []
			}, this.addEventListener = function(a, b) {
				var c = this,
					d = function(a) {
						b.call(c, a)
					};
				return this.messageBus.subscribe(a, d), this
			}, this.removeEventListener = function(a) {
				this.messageBus.unsubscribe(a)
			}, this.removeAllEventListener = function() {
				this.messageBus = new a.util.MessageBus
			}, this.dispatchEvent = function(a, b) {
				return this.messageBus.publish(a, b), this
			};
			var q = "click,dbclick,mousedown,mouseup,mouseover,mouseout,mousemove,mousedrag,mousewheel,touchstart,touchmove,touchend,keydown,keyup".split(","),
				r = this;
			q.forEach(function(a) {
				r[a] = function(b) {
					null != b ? this.addEventListener(a, b) : this.dispatchEvent(a)
				}
			}), this.saveImageInfo = function(a, b) {
				var c = this.eagleEye.getImage(a, b),
					d = window.open("about:blank");
				return d.document.write("<img src='" + c + "' alt='from canvas'/>"), this
			}, this.saveAsLocalImage = function(a, b, type) {
				var c = this.eagleEye.getImageUrlData(a, b, type);
				if (c != null) {
					download(c);
					this
				}
				function download(imgdata) {
					var fixtype = function(type) {
						type = type.toLowerCase().replace(/jpg/i, 'jpeg');
						var r = type.match(/png|jpeg|bmp|gif/)[0];
						return 'image' + r
					};
					imgdata = imgdata.replace(fixtype(type), 'image/octet-stream');
					var saveFile = function(data, filename) {
						var link = document.createElement('a');
						link.href = data;
						link.download = filename;
						var event = document.createEvent('MouseEvents');
						event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
						link.dispatchEvent(event)
					};
					var filename = new Date().getTime() + '.' + type;
					saveFile(imgdata, filename)
				}
			}, this.paint = function() {
				null != this.canvas && (this.graphics.save(), this.graphics.clearRect(0, 0, this.width, this.height), this.childs.forEach(function(a) {
					1 == a.visible && a.repaint(n.graphics)
				}), 1 == this.eagleEye.visible && this.eagleEye.paint(this), this.graphics.restore())
			}, this.repaint = function() {
				0 != this.frames && (this.frames < 0 && 0 == this.needRepaint || (this.paint(), this.frames < 0 && (this.needRepaint = !1)))
			}, this.zoom = function(a) {
				this.childs.forEach(function(b) {
					0 != b.visible && b.zoom(a)
				})
			}, this.zoomOut = function(a) {
				this.childs.forEach(function(b) {
					0 != b.visible && b.zoomOut(a)
				})
			}, this.zoomIn = function(a) {
				this.childs.forEach(function(b) {
					0 != b.visible && b.zoomIn(a)
				})
			}, this.centerAndZoom = function() {
				this.childs.forEach(function(a) {
					0 != a.visible && a.centerAndZoom()
				})
			}, this.setCenter = function(a, b) {
				var c = this;
				this.childs.forEach(function(d) {
					var e = a - c.canvas.width / 2,
						f = b - c.canvas.height / 2;
					d.translateX = -e, d.translateY = -f
				})
			}, this.getBound = function() {
				var a = {
					left: Number.MAX_VALUE,
					right: Number.MIN_VALUE,
					top: Number.MAX_VALUE,
					bottom: Number.MIN_VALUE
				};
				return this.childs.forEach(function(b) {
					var c = b.getElementsBound();
					c.left < a.left && (a.left = c.left, a.leftNode = c.leftNode), c.top < a.top && (a.top = c.top, a.topNode = c.topNode), c.right > a.right && (a.right = c.right, a.rightNode = c.rightNode), c.bottom > a.bottom && (a.bottom = c.bottom, a.bottomNode = c.bottomNode)
				}), a.width = a.right - a.left, a.height = a.bottom - a.top, a
			}, function() {
				0 == n.frames ? setTimeout(arguments.callee, 100) : n.frames < 0 ? (n.repaint(), setTimeout(arguments.callee, 1e3 / -n.frames)) : (n.repaint(), setTimeout(arguments.callee, 1e3 / n.frames))
			}(), setTimeout(function() {
				n.mousewheel(function(a) {
					var b = null == a.wheelDelta ? a.detail : a.wheelDelta;
					null != this.wheelZoom && (b > 0 ? this.zoomOut(this.wheelZoom) : this.zoomIn(this.wheelZoom))
				}), n.paint()
			}, 300), setTimeout(function() {
				n.paint()
			}, 1e3), setTimeout(function() {
				n.paint()
			}, 3e3)
		}
		c.prototype = {
			get width() {
				return this.canvas.width
			}, get height() {
				return this.canvas.height
			}, set cursor(a) {
				this.canvas.style.cursor = a
			}, get cursor() {
				return this.canvas.style.cursor
			}, set mode(a) {
				this.childs.forEach(function(b) {
					b.mode = a
				})
			}
		}, a.Stage = c
	}(DGraph), function(a) {
		function b(c) {
			function d(a, b, c, d) {
				return function(e) {
					e.beginPath(), e.strokeStyle = "rgba(0,225,0,0.5)", e.fillStyle = "rgba(0,225,0,0.1)", e.rect(a, b, c, d), e.fill(), e.stroke(), e.closePath()
				}
			}
			var e = this;
			this.initialize = function() {
				b.prototype.initialize.apply(this, arguments), this.messageBus = new a.util.MessageBus, this.elementType = "scene", this.childs = [], this.zIndexMap = {}, this.zIndexArray = [], this.backgroundColor = "255,255,255", this.visible = !0, this.alpha = 0, this.scaleX = 1, this.scaleY = 1, this.mode = a.SceneMode.normal, this.translate = !0, this.translateX = 0, this.translateY = 0, this.lastTranslateX = 0, this.lastTranslateY = 0, this.mouseDown = !1, this.mouseDownX = null, this.mouseDownY = null, this.mouseDownEvent = null, this.areaSelect = !0, this.operations = [], this.selectedElements = [], this.paintAll = !1;
				var c = "background,backgroundColor,mode,paintAll,areaSelect,translate,translateX,translateY,lastTranslatedX,lastTranslatedY,alpha,visible,scaleX,scaleY".split(",");
				this.serializedProperties = this.serializedProperties.concat(c)
			}, this.initialize(), this.scene = function(a) {
				this.background = a
			}, this.addTo = function(a) {
				this.stage !== a && null != a && (this.stage = a)
			}, null != c && (c.add(this), this.addTo(c)), this.show = function() {
				this.visible = !0
			}, this.hide = function() {
				this.visible = !1
			}, this.paint = function(a) {
				if (0 != this.visible && null != this.stage) {
					if (a.save(), this.paintBackgroud(a), a.restore(), a.save(), a.scale(this.scaleX, this.scaleY), 1 == this.translate) {
						var b = this.getOffsetTranslate(a);
						a.translate(b.translateX, b.translateY)
					}
					this.paintChilds(a), a.restore(), a.save(), this.paintOperations(a, this.operations), a.restore()
				}
			}, this.repaint = function(a) {
				0 != this.visible && this.paint(a)
			}, this.paintBackgroud = function(a) {
				null != this.background ? a.drawImage(this.background, 0, 0, a.canvas.width, a.canvas.height) : (a.beginPath(), a.fillStyle = "rgba(" + this.backgroundColor + "," + this.alpha + ")", a.fillRect(0, 0, a.canvas.width, a.canvas.height), a.closePath())
			}, this.getDisplayedElements = function() {
				for (var a = [], b = 0; b < this.zIndexArray.length; b++) for (var c = this.zIndexArray[b], d = this.zIndexMap[c], e = 0; e < d.length; e++) {
					var f = d[e];
					this.isVisiable(f) && a.push(f)
				}
				return a
			}, this.getDisplayedNodes = function() {
				for (var b = [], c = 0; c < this.childs.length; c++) {
					var d = this.childs[c];
					d instanceof a.Node && this.isVisiable(d) && b.push(d)
				}
				return b
			}, this.paintChilds = function(b) {
				for (var c = 0; c < this.zIndexArray.length; c++) for (var d = this.zIndexArray[c], e = this.zIndexMap[d], f = 0; f < e.length; f++) {
					var g = e[f];
					if (g.visible == 1) {
						if (b.save(), 1 == g.transformAble) {
							var h = g.getCenterLocation();
							b.translate(h.x, h.y), g.rotate && b.rotate(g.rotate), g.scaleX && g.scaleY ? b.scale(g.scaleX, g.scaleY) : g.scaleX ? b.scale(g.scaleX, 1) : g.scaleY && b.scale(1, g.scaleY)
						}
						g instanceof a.InteractiveElement && (g.selected && 1 == g.showSelected && g.paintSelected(b), 1 == g.isMouseOver && g.paintMouseover(b)), g.paint(b), b.restore()
					}
				}
			}, this.getOffsetTranslate = function(a) {
				var b = this.stage.canvas.width,
					c = this.stage.canvas.height;
				null != a && "move" != a && (b = a.canvas.width, c = a.canvas.height);
				var d = b / this.scaleX / 2,
					e = c / this.scaleY / 2,
					f = {
						translateX: this.translateX + (d - d * this.scaleX),
						translateY: this.translateY + (e - e * this.scaleY)
					};
				return f
			}, this.isVisiable = function(b) {
				if (1 != b.visible) return !1;
				if (b instanceof a.Link) return !0;
				var c = this.getOffsetTranslate(),
					d = b.x + c.translateX,
					e = b.y + c.translateY;
				d *= this.scaleX, e *= this.scaleY;
				var f = d + b.width * this.scaleX,
					g = e + b.height * this.scaleY;
				return d > this.stage.canvas.width || e > this.stage.canvas.height || 0 > f || 0 > g ? !1 : !0
			}, this.paintOperations = function(a, b) {
				for (var c = 0; c < b.length; c++) b[c](a)
			}, this.findElements = function(a) {
				for (var b = [], c = 0; c < this.childs.length; c++) 1 == a(this.childs[c]) && b.push(this.childs[c]);
				return b
			}, this.getElementsByClass = function(a) {
				return this.findElements(function(b) {
					return b instanceof a
				})
			}, this.addOperation = function(a) {
				return this.operations.push(a), this
			}, this.clearOperations = function() {
				return this.operations = [], this
			}, this.getElementByXY = function(b, c) {
				for (var d = null, e = this.zIndexArray.length - 1; e >= 0; e--) for (var f = this.zIndexArray[e], g = this.zIndexMap[f], h = g.length - 1; h >= 0; h--) {
					var i = g[h];
					if (i instanceof a.InteractiveElement && this.isVisiable(i) && i.isInBound(b, c)) return d = i
				}
				return d
			}, this.add = function(a) {
				this.childs.push(a), null == this.zIndexMap[a.zIndex] && (this.zIndexMap[a.zIndex] = [], this.zIndexArray.push(a.zIndex), this.zIndexArray.sort(function(a, b) {
					return a - b
				})), this.zIndexMap["" + a.zIndex].push(a)
			}, this.remove = function(b) { //todo 这里是删掉节点remove函数的地方
				this.childs = a.util.removeFromArray(this.childs, b);
				var c = this.zIndexMap[b.zIndex];
				c && (this.zIndexMap[b.zIndex] = a.util.removeFromArray(c, b)), b.removeHandler(this)
			}, this.clear = function() {
				var a = this;
				this.childs.forEach(function(b) {
					b.removeHandler(a)
				}), this.childs = [], this.operations = [], this.zIndexArray = [], this.zIndexMap = {}
			}, this.addToSelected = function(a) {
				this.selectedElements.push(a)  //todo 这里是很关键的把节点放进selectedElements中
			}, this.cancleAllSelected = function(a) {
				for (var b = 0; b < this.selectedElements.length; b++) this.selectedElements[b].unselectedHandler(a);
				this.selectedElements = []
			}, this.notInSelectedNodes = function(a) {
				for (var b = 0; b < this.selectedElements.length; b++) if (a === this.selectedElements[b]) return !1;
				return !0
			}, this.removeFromSelected = function(a) {
				for (var b = 0; b < this.selectedElements.length; b++) {
					var c = this.selectedElements[b];
					a === c && (this.selectedElements = this.selectedElements.del(b))
				}
			}, this.toSceneEvent = function(b) {
				var c = a.util.clone(b);
				if (c.x /= this.scaleX, c.y /= this.scaleY, 1 == this.translate) {
					var d = this.getOffsetTranslate();
					c.x -= d.translateX, c.y -= d.translateY
				}
				return null != c.dx && (c.dx /= this.scaleX, c.dy /= this.scaleY), null != this.currentElement && (c.target = this.currentElement), c.scene = this, c
			}, this.selectElement = function(a) {
				var b = e.getElementByXY(a.x, a.y);
				if (null != b) if (a.target = b, b.mousedownHander(a), b.selectedHandler(a), e.notInSelectedNodes(b)) a.ctrlKey || e.cancleAllSelected(), e.addToSelected(b);
				else {
					1 == a.ctrlKey && (b.unselectedHandler(), this.removeFromSelected(b));
					for (var c = 0; c < this.selectedElements.length; c++) {
						var d = this.selectedElements[c];
						d.selectedHandler(a)
					}
				} else a.ctrlKey || e.cancleAllSelected();
				this.currentElement = b
			}, this.mousedownHandler = function(b) {
				var c = this.toSceneEvent(b);
				if (this.mouseDown = !0, this.mouseDownX = c.x, this.mouseDownY = c.y, this.mouseDownEvent = c, this.mode == a.SceneMode.normal) this.selectElement(c), (null == this.currentElement || this.currentElement instanceof a.Link) && 1 == this.translate && (this.lastTranslateX = this.translateX, this.lastTranslateY = this.translateY);
				else {
					if (this.mode == a.SceneMode.drag && 1 == this.translate) return this.lastTranslateX = this.translateX, void(this.lastTranslateY = this.translateY);
					this.mode == a.SceneMode.select ? this.selectElement(c) : this.mode == a.SceneMode.edit && (this.selectElement(c), (null == this.currentElement || this.currentElement instanceof a.Link) && 1 == this.translate && (this.lastTranslateX = this.translateX, this.lastTranslateY = this.translateY))
				}
				e.dispatchEvent("mousedown", c)
			}, this.mouseupHandler = function(b) {
				this.stage.cursor != a.MouseCursor.normal && (this.stage.cursor = a.MouseCursor.normal), e.clearOperations();
				var c = this.toSceneEvent(b);
				null != this.currentElement && (c.target = e.currentElement, this.currentElement.mouseupHandler(c));
				this.dispatchEvent("mouseup", c), this.mouseDown = !1
			}, this.dragElements = function(b) {
				if (null != this.currentElement && 1 == this.currentElement.dragable) for (var c = 0; c < this.selectedElements.length; c++) {
					var d = this.selectedElements[c];
					if (0 != d.dragable) {
						var e = a.util.clone(b);
						e.target = d, d.mousedragHandler(e)
					}
				}
			}, this.mousedragHandler = function(b) {
				var c = this.toSceneEvent(b);
				this.mode == a.SceneMode.normal ? null == this.currentElement || this.currentElement instanceof a.Link ? 1 == this.translate && (this.stage.cursor = a.MouseCursor.closed_hand, this.translateX = this.lastTranslateX + c.dx, this.translateY = this.lastTranslateY + c.dy) : this.dragElements(c) : this.mode == a.SceneMode.drag ? 1 == this.translate && (this.stage.cursor = a.MouseCursor.closed_hand, this.translateX = this.lastTranslateX + c.dx, this.translateY = this.lastTranslateY + c.dy) : this.mode == a.SceneMode.select ? null != this.currentElement ? 1 == this.currentElement.dragable && this.dragElements(c) : 1 == this.areaSelect && this.areaSelectHandle(c) : this.mode == a.SceneMode.edit && (null == this.currentElement || this.currentElement instanceof a.Link ? 1 == this.translate && (this.stage.cursor = a.MouseCursor.closed_hand, this.translateX = this.lastTranslateX + c.dx, this.translateY = this.lastTranslateY + c.dy) : this.dragElements(c)), this.dispatchEvent("mousedrag", c)
			}, this.areaSelectHandle = function(a) {
				var b = a.offsetLeft,
					c = a.offsetTop,
					f = this.mouseDownEvent.offsetLeft,
					g = this.mouseDownEvent.offsetTop,
					h = b >= f ? f : b,
					i = c >= g ? g : c,
					j = Math.abs(a.dx) * this.scaleX,
					k = Math.abs(a.dy) * this.scaleY,
					l = new d(h, i, j, k);
				e.clearOperations().addOperation(l), b = a.x, c = a.y, f = this.mouseDownEvent.x, g = this.mouseDownEvent.y, h = b >= f ? f : b, i = c >= g ? g : c, j = Math.abs(a.dx), k = Math.abs(a.dy);
				for (var m = h + j, n = i + k, o = 0; o < e.childs.length; o++) {
					var p = e.childs[o];
					if (p.elementType == 'link') {
						continue
					}
					p.x > h && p.x + p.width < m && p.y > i && p.y + p.height < n && e.notInSelectedNodes(p) && (p.selectedHandler(a), e.addToSelected(p))
				}
			}, this.mousemoveHandler = function(b) {
				this.mousecoord = {
					x: b.x,
					y: b.y
				};
				var c = this.toSceneEvent(b);
				if (this.mode == a.SceneMode.drag) return void(this.stage.cursor = a.MouseCursor.open_hand);
				this.mode == a.SceneMode.normal ? this.stage.cursor = a.MouseCursor.normal : this.mode == a.SceneMode.select && (this.stage.cursor = a.MouseCursor.normal);
				var d = e.getElementByXY(c.x, c.y);
				null != d ? (e.mouseOverelement && e.mouseOverelement !== d && (c.target = d, e.mouseOverelement.mouseoutHandler(c)), e.mouseOverelement = d, 0 == d.isMouseOver ? (c.target = d, d.mouseoverHandler(c), e.dispatchEvent("mouseover", c)) : (c.target = d, d.mousemoveHandler(c), e.dispatchEvent("mousemove", c))) : e.mouseOverelement ? (c.target = d, e.mouseOverelement.mouseoutHandler(c), e.mouseOverelement = null, e.dispatchEvent("mouseout", c)) : (c.target = null, e.dispatchEvent("mousemove", c))
			}, this.mouseoverHandler = function(a) {
				var b = this.toSceneEvent(a);
				this.dispatchEvent("mouseover", b)
			}, this.mouseoutHandler = function(a) {
				var b = this.toSceneEvent(a);
				this.dispatchEvent("mouseout", b)
			}, this.clickHandler = function(a) {
				var b = this.toSceneEvent(a);
				this.currentElement && (b.target = this.currentElement, this.currentElement.clickHandler(b)), this.dispatchEvent("click", b)
			}, this.dbclickHandler = function(a) {
				var b = this.toSceneEvent(a);
				this.currentElement ? (b.target = this.currentElement, this.currentElement.dbclickHandler(b)) : e.cancleAllSelected(), this.dispatchEvent("dbclick", b)
			}, this.mousewheelHandler = function(a) {
				var b = this.toSceneEvent(a);
				this.dispatchEvent("mousewheel", b)
			}, this.touchstart = this.mousedownHander, this.touchmove = this.mousedragHandler, this.touchend = this.mousedownHander, this.keydownHandler = function(a) {
				this.dispatchEvent("keydown", a)
			}, this.keyupHandler = function(a) {
				this.dispatchEvent("keyup", a)
			}, this.addEventListener = function(a, b) {
				var c = this,
					d = function(a) {
						b.call(c, a)
					};
				return this.messageBus.subscribe(a, d), this
			}, this.removeEventListener = function(a) {
				this.messageBus.unsubscribe(a)
			}, this.removeAllEventListener = function() {
				this.messageBus = new a.util.MessageBus
			}, this.dispatchEvent = function(a, b) {
				return this.messageBus.publish(a, b), this
			};
			var f = "click,dbclick,mousedown,mouseup,mouseover,mouseout,mousemove,mousedrag,mousewheel,touchstart,touchmove,touchend,keydown,keyup".split(","),
				g = this;
			return f.forEach(function(a) {
				g[a] = function(b) {
					null != b ? this.addEventListener(a, b) : this.dispatchEvent(a)
				}
			}), this.zoom = function(a, b) {
				null != a && 0 != a && (this.scaleX = a), null != b && 0 != b && (this.scaleY = b)
			}, this.zoomOut = function(a) {
				0 != a && (null == a && (a = .8), this.scaleX /= a, this.scaleY /= a)
			}, this.zoomIn = function(a) {
				0 != a && (null == a && (a = .8), this.scaleX *= a, this.scaleY *= a)
			}, this.getBound = function() {
				return {
					left: 0,
					top: 0,
					right: this.stage.canvas.width,
					bottom: this.stage.canvas.height,
					width: this.stage.canvas.width,
					height: this.stage.canvas.height
				}
			}, this.getElementsBound = function() {
				return a.util.getElementsBound(this.childs)
			}, this.translateToCenter = function(a) {
				var b = this.getElementsBound(),
					c = this.stage.canvas.width / 2 - (b.left + b.right) / 2,
					d = this.stage.canvas.height / 2 - (b.top + b.bottom) / 2;
				a && (c = a.canvas.width / 2 - (b.left + b.right) / 2, d = a.canvas.height / 2 - (b.top + b.bottom) / 2), this.translateX = c, this.translateY = d
			}, this.setCenter = function(a, b) {
				var c = a - this.stage.canvas.width / 2,
					d = b - this.stage.canvas.height / 2;
				this.translateX = -c, this.translateY = -d
			}, this.centerAndZoom = function(a, b, c) {
				if (this.translateToCenter(c), null == a || null == b) {
					var d = this.getElementsBound();
					var e = (d.right + d.rightNode.radius * d.rightNode.scaleX) - (d.left - d.leftNode.radius * d.leftNode.scaleX) + 40;
					var f = (d.bottom + d.bottomNode.radius * d.bottomNode.scaleX) - (d.top - d.topNode.radius * d.topNode.scaleX) + 15;
					var g = this.stage.canvas.width / e,
						h = this.stage.canvas.height / f;
					c && (g = c.canvas.width / e, h = c.canvas.height / f);
					var i = Math.min(g, h);
					if (i > 1) return;
					this.zoom(i, i)
				} else {
					this.zoom(a, b)
				}
			}, this.getCenterLocation = function() {
				return {
					x: e.stage.canvas.width / 2,
					y: e.stage.canvas.height / 2
				}
			}, this.doLayout = function(a) {
				a && a(this, this.childs)
			}, e
		};
		b.prototype = new a.Element;
		var c = {};
		Object.defineProperties(b.prototype, {
			background: {
				get: function() {
					return this._background
				},
				set: function(a) {
					if ("string" == typeof a) {
						var b = c[a];
						null == b && (b = new Image, b.src = a, b.onload = function() {
							c[a] = b
						}), this._background = b
					} else this._background = a
				}
			}
		}), a.Scene = b
	}(DGraph), function(a) {
		function b() {
			this.initialize = function() {
				b.prototype.initialize.apply(this, arguments), this.elementType = "displayElement", this.x = 0, this.y = 0, this.width = 32, this.height = 32, this.visible = !0, this.alpha = 1, this.rotate = 0, this.scaleX = 1, this.scaleY = 1, this.strokeColor = "22,255,22", this.borderColor = "22,255,22", this.fillColor = "22,255,22", this.shadow = !1, this.shadowBlur = 5, this.shadowColor = "rgba(20,200,20,0.5)", this.shadowOffsetX = 3, this.shadowOffsetY = 6, this.transformAble = !1, this.zIndex = 0;
				var a = "x,y,width,height,visible,alpha,rotate,scaleX,scaleY,strokeColor,fillColor,shadow,shadowColor,shadowOffsetX,shadowOffsetY,transformAble,zIndex".split(",");
				this.serializedProperties = this.serializedProperties.concat(a)
			}, this.initialize(), this.paint = function(a) {
				a.beginPath(), a.fillStyle = "rgba(" + this.fillColor + "," + this.alpha + ")", a.rect(-this.width / 2, -this.height / 2, this.width, this.height), a.fill(), a.stroke(), a.closePath()
			}, this.getLocation = function() {
				return {
					x: this.x,
					y: this.y
				}
			}, this.setLocation = function(a, b) {
				return this.x = a, this.y = b, this
			}, this.getCenterLocation = function() {
				return {
					x: this.x + this.width / 2,
					y: this.y + this.height / 2
				}
			}, this.setCenterLocation = function(a, b) {
				return this.x = a - this.width / 2, this.y = b - this.height / 2, this
			}, this.getSize = function() {
				return {
					width: this.width,
					height: this.heith
				}
			}, this.setSize = function(a, b) {
				return this.width = a, this.height = b, this.raduis = this.width / 2, this
			}, this.getBound = function() {
				return {
					left: this.x,
					top: this.y,
					right: this.x + this.width,
					bottom: this.y + this.height,
					width: this.width,
					height: this.height
				}
			}, this.setBound = function(a, b, c, d) {
				return this.setLocation(a, b), this.setSize(c, d), this
			}, this.getDisplayBound = function() {
				return {
					left: this.x,
					top: this.y,
					right: this.x + this.width * this.scaleX,
					bottom: this.y + this.height * this.scaleY
				}
			}, this.getDisplaySize = function() {
				return {
					width: this.width * this.scaleX,
					height: this.height * this.scaleY
				}
			}, this.getPosition = function(a) {
				var b, c = this.getBound();
				return "Top_Left" == a ? b = {
					x: c.left,
					y: c.top
				} : "Top_Center" == a ? b = {
					x: this.cx,
					y: c.top
				} : "Top_Right" == a ? b = {
					x: c.right,
					y: c.top
				} : "Middle_Left" == a ? b = {
					x: c.left,
					y: this.cy
				} : "Middle_Center" == a ? b = {
					x: this.cx,
					y: this.cy
				} : "Middle_Right" == a ? b = {
					x: c.right,
					y: this.cy
				} : "Bottom_Left" == a ? b = {
					x: c.left,
					y: c.bottom
				} : "Bottom_Center" == a ? b = {
					x: this.cx,
					y: c.bottom
				} : "Bottom_Right" == a && (b = {
					x: c.right,
					y: c.bottom
				}), b
			}
		}
		function c() {
			this.initialize = function() {
				c.prototype.initialize.apply(this, arguments), this.elementType = "interactiveElement", this.dragable = !1, this.selected = !1, this.showSelected = !0, this.selectedLocation = null, this.isMouseOver = !1;
				var a = "dragable,selected,showSelected,isMouseOver".split(",");
				this.serializedProperties = this.serializedProperties.concat(a)
			}, this.initialize(), this.paintSelected = function(a) {
				if (0 != this.showSelected && this.selected == 0) {
					a.save(), a.beginPath();
					if (this.image) {
						a.lineWidth = this.borderWidth;
						a.strokeStyle = 'rgba(' + (this.borderColor || this.fillColor) + ',' + (this.alpha * 0.6) + ')';
						a.arc(0, 0, this.width / 2 + 2, 0, 2 * Math.PI, true)
					} else {
						a.lineWidth = this.borderWidth;
						a.strokeStyle = 'rgba(' + (this.borderColor || this.fillColor) + ',' + this.alpha + ')';
						this.paintShape(a)
					}
					a.closePath(), a.stroke(), a.restore()
				}
			}, this.paintShape = function(a) {}, this.paintMouseover = function(a) {
				return this.paintSelected(a)
			}, this.isInBound = function(a, b) {
				return a > this.x && a < this.x + this.width * Math.abs(this.scaleX) && b > this.y && b < this.y + this.height * Math.abs(this.scaleY)
			}, this.selectedHandler = function() {
				this.selected = !0, this.selectedLocation = {
					x: this.x,
					y: this.y
				}
			}, this.unselectedHandler = function() {
				this.selected = !1, this.selectedLocation = null
			}, this.dbclickHandler = function(a) {
				this.dispatchEvent("dbclick", a)
			}, this.clickHandler = function(a) {
				this.dispatchEvent("click", a)
			}, this.mousedownHander = function(a) {
				this.dispatchEvent("mousedown", a)
			}, this.mouseupHandler = function(a) {
				this.dispatchEvent("mouseup", a)
			}, this.mouseoverHandler = function(a) {
				this.isMouseOver = !0, this.dispatchEvent("mouseover", a)
			}, this.mousemoveHandler = function(a) {
				this.dispatchEvent("mousemove", a)
			}, this.mouseoutHandler = function(a) {
				this.isMouseOver = !1, this.dispatchEvent("mouseout", a)
			}, this.mousedragHandler = function(a) {
				var b = this.selectedLocation.x + a.dx,
					c = this.selectedLocation.y + a.dy;
				this.setLocation(b, c), this.dispatchEvent("mousedrag", a)
			}, this.addEventListener = function(b, c) {
				var d = this,
					e = function(a) {
						c.call(d, a)
					};
				return this.messageBus || (this.messageBus = new a.util.MessageBus), this.messageBus.subscribe(b, e), this
			}, this.dispatchEvent = function(a, b) {
				return this.messageBus ? (this.messageBus.publish(a, b), this) : null
			}, this.removeEventListener = function(a) {
				this.messageBus.unsubscribe(a)
			}, this.removeAllEventListener = function() {
				this.messageBus = new a.util.MessageBus
			};
			var b = "click,dbclick,mousedown,mouseup,mouseover,mouseout,mousemove,mousedrag,touchstart,touchmove,touchend".split(","),
				d = this;
			b.forEach(function(a) {
				d[a] = function(b) {
					null != b ? this.addEventListener(a, b) : this.dispatchEvent(a)
				}
			})
		}
		function d() {
			this.initialize = function() {
				d.prototype.initialize.apply(this, arguments), this.editAble = !1, this.selectedPoint = null
			}, this.getCtrlPosition = function(a) {
				var b = 5,
					c = 5,
					d = this.getPosition(a);
				return {
					left: d.x - b,
					top: d.y - c,
					right: d.x + b,
					bottom: d.y + c
				}
			}, this.selectedHandler = function(b) {
				d.prototype.selectedHandler.apply(this, arguments), this.selectedSize = {
					width: this.width,
					height: this.height
				}, b.scene.mode == a.SceneMode.edit && (this.editAble = !0)
			}, this.unselectedHandler = function() {
				d.prototype.unselectedHandler.apply(this, arguments), this.selectedSize = null, this.editAble = !1
			};
			var b = ["Top_Left", "Top_Center", "Top_Right", "Middle_Left", "Middle_Right", "Bottom_Left", "Bottom_Center", "Bottom_Right"];
			this.paintCtrl = function(a) {
				if (0 != this.editAble) {
					a.save();
					for (var c = 0; c < b.length; c++) {
						var d = this.getCtrlPosition(b[c]);
						d.left -= this.cx, d.right -= this.cx, d.top -= this.cy, d.bottom -= this.cy;
						var e = d.right - d.left,
							f = d.bottom - d.top;
						a.beginPath(), a.strokeStyle = "rgba(0,0,0,0.8)", a.rect(d.left, d.top, e, f), a.stroke(), a.closePath(), a.beginPath(), a.strokeStyle = "rgba(255,255,255,0.3)", a.rect(d.left + 1, d.top + 1, e - 2, f - 2), a.stroke(), a.closePath()
					}
					a.restore()
				}
			}, this.isInBound = function(a, c) {
				if (this.selectedPoint = null, 1 == this.editAble) for (var e = 0; e < b.length; e++) {
					var f = this.getCtrlPosition(b[e]);
					if (a > f.left && a < f.right && c > f.top && c < f.bottom) return this.selectedPoint = b[e], !0
				}
				return d.prototype.isInBound.apply(this, arguments)
			}, this.mousedragHandler = function(a) {
				if (null == this.selectedPoint) {
					var b = this.selectedLocation.x + a.dx,
						c = this.selectedLocation.y + a.dy;
					this.setLocation(b, c), this.dispatchEvent("mousedrag", a)
				} else {
					if ("Top_Left" == this.selectedPoint) {
						var d = this.selectedSize.width - a.dx,
							e = this.selectedSize.height - a.dy,
							b = this.selectedLocation.x + a.dx,
							c = this.selectedLocation.y + a.dy;
						b < this.x + this.width && (this.x = b, this.width = d), c < this.y + this.height && (this.y = c, this.height = e)
					} else if ("Top_Center" == this.selectedPoint) {
						var e = this.selectedSize.height - a.dy,
							c = this.selectedLocation.y + a.dy;
						c < this.y + this.height && (this.y = c, this.height = e)
					} else if ("Top_Right" == this.selectedPoint) {
						var d = this.selectedSize.width + a.dx,
							c = this.selectedLocation.y + a.dy;
						c < this.y + this.height && (this.y = c, this.height = this.selectedSize.height - a.dy), d > 1 && (this.width = d)
					} else if ("Middle_Left" == this.selectedPoint) {
						var d = this.selectedSize.width - a.dx,
							b = this.selectedLocation.x + a.dx;
						b < this.x + this.width && (this.x = b), d > 1 && (this.width = d)
					} else if ("Middle_Right" == this.selectedPoint) {
						var d = this.selectedSize.width + a.dx;
						d > 1 && (this.width = d)
					} else if ("Bottom_Left" == this.selectedPoint) {
						var d = this.selectedSize.width - a.dx,
							b = this.selectedLocation.x + a.dx;
						d > 1 && (this.x = b, this.width = d);
						var e = this.selectedSize.height + a.dy;
						e > 1 && (this.height = e)
					} else if ("Bottom_Center" == this.selectedPoint) {
						var e = this.selectedSize.height + a.dy;
						e > 1 && (this.height = e)
					} else if ("Bottom_Right" == this.selectedPoint) {
						var d = this.selectedSize.width + a.dx;
						d > 1 && (this.width = d);
						var e = this.selectedSize.height + a.dy;
						e > 1 && (this.height = e)
					}
					this.dispatchEvent("resize", a)
				}
			}
		}
		b.prototype = new a.Element, Object.defineProperties(b.prototype, {
			cx: {
				get: function() {
					return this.x + this.width / 2
				},
				set: function(a) {
					this.x = a - this.width / 2
				}
			},
			cy: {
				get: function() {
					return this.y + this.height / 2
				},
				set: function(a) {
					this.y = a - this.height / 2
				}
			}
		}), c.prototype = new b, d.prototype = new c, a.DisplayElement = b, a.InteractiveElement = c, a.EditableElement = d
	}(DGraph), function(a) {
		function b(c) {
			this.initialize = function(c) {
				b.prototype.initialize.apply(this, arguments), this.elementType = "node", this.zIndex = a.zIndex_Node, this.text = c, this.font = "12px yahei", this.fontColor = "20,20,20", this.borderWidth = 0, this.borderColor = "20,255,20", this.borderRadius = null, this.shadowColor = '20,255,20';
				this.dragable = !0, this.textPosition = "Middle_Center", this.textOffsetX = 0, this.textOffsetY = 0, this.transformAble = !0, this.inLinks = null, this.outLinks = null;
				this.radius = 50;
				this.width = this.height = this.radius;
				var d = "text,font,fontColor,textPosition,textOffsetX,textOffsetY,borderRadius".split(",");
				this.serializedProperties = this.serializedProperties.concat(d)
			}, this.initialize(c), this.circleImg = function(ctx, img, x, y, r) {
				var d = 2 * r;
				var cx = x + r,
					cy = y + r;
				ctx.arc(cx, cy, r, 0, 2 * Math.PI);
				ctx.clip();
				ctx.drawImage(img, x, y, d, d)
			}, this.paint = function(a) {
				this.width = this.height = this.radius;
				if (this.image) {
					this.paintBorder(a);
					var b = a.globalAlpha;
					a.save();
					a.globalAlpha = this.alpha;
					this.circleImg(a, this.image, -this.width / 2, -this.height / 2, this.width / 2);
					a.globalAlpha = b;
					a.restore()
				} else {
					a.save();
					a.beginPath();
					a.fillStyle = "rgba(" + this.fillColor + "," + this.alpha + ")";
					this.paintShape(a);
					a.closePath();
					if (this.selected) {
						a.lineWidth = Math.max(Math.round(this.width / 8), 5);
						a.strokeStyle = "rgba(" + this.borderColor + "," + (this.alpha * 0.5) + ")";
						a.stroke()
					} else {
						if (this.borderWidth > 0) {
							a.lineWidth = this.borderWidth;
							a.strokeStyle = "rgba(" + this.borderColor + "," + (this.alpha * 0.6) + ")";
							a.stroke()
						}
					}
					this.paintShadow(a);
					a.fill();
					a.restore()
				}
				this.paintText(a), this.paintCtrl(a), this.paintTipText(a)
			}, this.paintShape = function(a) {
				switch (this.shape) {
					case 'rect':
						a.rect(-this.width / 2, -this.height / 2, this.width, this.height);
						break;
					case 'ellipse':
						a.ellipse(0, 0, this.width * 2 / 3, this.width / 2, 0, 0, 2 * Math.PI);
						break;
					case 'triangle':
						a.moveTo(0, -this.width / 2);
						a.lineTo(-this.width / 2, this.width / 2);
						a.lineTo(this.width / 2, this.width / 2);
						break;
					case 'text':
						a.font = this.font;
						a.textAlign = 'center';
						a.textBaseline = 'middle';
						a.fillText(this.label || '', 0, 0, 200);
						break;
					case 'star':
						for (var i = 0; i < 5; i++) {
							a.lineTo(Math.cos((18 + i * 72) * Math.PI / 180) * this.width, -Math.sin((18 + i * 72) * Math.PI / 180) * this.width);
							a.lineTo(Math.cos((54 + i * 72) * Math.PI / 180) * this.width / 2, -Math.sin((54 + i * 72) * Math.PI / 180) * this.width / 2)
						}
						break;
					case 'polygon':
						var degree = (2 * Math.PI) / 6;
						for (var i = 0; i < 6; i++) {
							var x = Math.cos(i * degree);
							var y = Math.sin(i * degree);
							a.lineTo(x * (this.width / 2), y * (this.width / 2))
						}
						break;
					default:
						a.arc(0, 0, this.width / 2, 0, 2 * Math.PI, true);
						break
				}
			}, this.paintTipText = function(a) {
				if (null != this.tipText && "" != this.tipText) {
					var b = this.alarmColor || "0,250,0",
						c = this.alarmAlpha || (0.8 * this.alpha);
					a.beginPath(), a.font = this.alarmFont || "10px yahei";
					var d = a.measureText(this.tipText).width + 6,
						e = a.measureText("田").width + 6,
						f = this.width / 2 - d / 2,
						g = -this.height / 2 - e - 8;
					a.strokeStyle = "rgba(" + b + ", " + c + ")", a.fillStyle = "rgba(" + b + ", " + c + ")", a.DGraphRoundRect(this.width / 3, -this.height / 2, d + 5, e, 8), a.stroke(), a.fill(), a.beginPath(), a.fillStyle = "rgba(250,250,250, " + this.alpha + ")", a.fillText(this.tipText, this.width / 3 + 5, -this.height / 2 + 12), a.closePath()
				}
			}, this.paintText = function(a) {
				if (this.shape && this.shape == 'text') {
					return
				}
				var self = this;
				var b;
				if (this.showlabel != null && this.showlabel == true) {
					b = this.text = this.label
				} else {
					b = this.text = null;
					return
				}
				if (null != b && "" != b) {
					var e, maxTextNum = 20;
					a.save();
					a.fillStyle = "rgba(" + this.fontColor + ", " + this.alpha + ")";
					a.font = this.font;
					var singleTextWidth = a.measureText("田").width;
					if (this.wrapText == true) {
						var textArr = this.buildTextArray(b);
						var maxWidth = 0;
						textArr.forEach(function(text, i) {
							text = String(text);
							var textWidth = a.measureText(text.replace(/ /g, 'a')).width;
							maxWidth = Math.max(maxWidth, textWidth);
							e = self.getTextPostion(self.textPosition, textWidth, singleTextWidth);
							a.fillText(text, e.x, -((singleTextWidth / 2) * textArr.length) + ((i + 1) * singleTextWidth))
						});
						this.radius = (maxWidth + 8) < this.width ? this.width : (maxWidth + 8)
					} else {
						var textWidth = a.measureText(b).width;
						e = this.getTextPostion(this.textPosition, textWidth, singleTextWidth);
						a.fillText(b, e.x, e.y)
					}
					a.restore()
				}
			}, this.buildTextArray = function(label) {
				var length = String(label).length;
				var textArr = [];
				if (length < 5) {
					textArr.push(label)
				} else if (length >= 5 && length <= 9) {
					textArr.push(label.substring(0, 4));
					textArr.push(label.substring(4))
				} else if (length > 9 && length <= 13) {
					textArr.push(label.substring(0, 4));
					textArr.push(label.substring(4, 9));
					textArr.push(label.substring(9))
				} else {
					textArr.push(label.substring(0, 4));
					textArr.push(label.substring(4, 9));
					textArr.push(label.substring(9, 12) + '..')
				}
				return textArr
			};
			this.paintShadow = function(a) {
				if (this.showShadow) {
					a.shadowBlur = 20, a.shadowColor = "rgba(" + this.shadowColor + "," + (this.alpha * 0.8) + ")", a.shadowOffsetX = 0, a.shadowOffsetY = 0
				}
			}, this.paintBorder = function(a) {
				a.save(), a.beginPath();
				if (this.selected) {
					a.shadowBlur = 20, a.shadowColor = "rgba(" + this.shadowColor + "," + (this.alpha * 0.8) + ")", a.shadowOffsetX = 0, a.shadowOffsetY = 0
				} else {}
				a.arc(0, 0, this.width / 2, 0, Math.PI * 2, false);
				a.closePath();
				a.fillStyle = "rgba(" + this.fillColor + "," + this.alpha + ")";
				this.paintShadow(a);
				a.fill();
				if (this.borderWidth > 0) {
					a.lineWidth = this.borderWidth;
					a.strokeStyle = "rgba(" + (this.borderColor || this.fillColor) + "," + (this.alpha * 0.6) + ")";
					a.stroke()
				}
				a.restore()
			}, this.transformContentToMultiLineText = function(ctx, text, contentWidth, lineNumber) {
				var textArray = String(text).split("");
				var temp = "";
				var row = [];
				for (var i = 0; i < textArray.length; i++) {
					if (ctx.measureText(temp).width < contentWidth) {
						temp += textArray[i]
					} else {
						i--;
						row.push(temp);
						temp = ""
					}
				}
				row.push(temp);
				if (row.length > lineNumber) {
					var rowCut = row.slice(0, lineNumber);
					var rowPart = rowCut[1];
					var test = "";
					var empty = [];
					for (var a = 0; a < rowPart.length; a++) {
						if (ctx.measureText(test).width < contentWidth) {
							test += rowPart[a]
						} else {
							break
						}
					}
					empty.push(test);
					var group = empty[0] + '..';
					rowCut.splice(lineNumber - 1, 1, group);
					row = rowCut
				}
				return row
			}, this.getTextPostion = function(a, b, c) {
				var d = null;
				return null == a || "Bottom_Center" == a ? d = {
					x: -this.width / 2 + (this.width - b) / 2,
					y: this.height / 2 + c
				} : "Top_Center" == a ? d = {
					x: -this.width / 2 + (this.width - b) / 2,
					y: -this.height / 2 - c / 2
				} : "Top_Right" == a ? d = {
					x: this.width / 2,
					y: -this.height / 2 - c / 2
				} : "Top_Left" == a ? d = {
					x: -this.width / 2 - b,
					y: -this.height / 2 - c / 2
				} : "Bottom_Right" == a ? d = {
					x: this.width / 2,
					y: this.height / 2 + c
				} : "Bottom_Left" == a ? d = {
					x: -this.width / 2 - b,
					y: this.height / 2 + c
				} : "Middle_Center" == a ? d = {
					x: -this.width / 2 + (this.width - b) / 2,
					y: c / 2
				} : "Middle_Right" == a ? d = {
					x: this.width / 2,
					y: c / 2
				} : "Middle_Left" == a && (d = {
					x: -this.width / 2 - b,
					y: c / 2
				}), null == d ? d = {
					x: -this.width / 2 + (this.width - b) / 2,
					y: this.height / 2 + c
				} : d, null != this.textOffsetX && (d.x += this.textOffsetX), null != this.textOffsetY && (d.y += this.textOffsetY), d
			}, this.setImage = function(b, c) {
				if (null == b) throw new Error("Node.setImage(): 参数Image对象为空!");
				var d = this;
				if ("string" == typeof b) {
					var img = j[b];
					if (img == null) {
						img = new Image();
						img.setAttribute('crossOrigin', 'Anonymous');
						img.src = b;
						img.onload = function() {
							d.image = img
						}
					} else {
						this.setSize(img.width, img.height), this.image = img
					}
				} else {
					this.image = b, this.setSize(b.width, b.height)
				}
			}, this.removeHandler = function(a) {
				var b = this;
				this.outLinks && (this.outLinks.forEach(function(c) {
					c.source === b && a.remove(c)
				}), this.outLinks = null), this.inLinks && (this.inLinks.forEach(function(c) {
					c.target === b && a.remove(c)
				}), this.inLinks = null)
			}
		}
		function c() {
			c.prototype.initialize.apply(this, arguments)
		}
		var j = {};
		b.prototype = new a.EditableElement, c.prototype = new b, a.Node = c
	}(DGraph), function(a) {
		function b(a, b) {
			var c = [];
			if (null == a || null == b) return c;
			if (a && b && a.outLinks && b.inLinks) for (var d = 0; d < a.outLinks.length; d++) for (var e = a.outLinks[d], f = 0; f < b.inLinks.length; f++) {
				var g = b.inLinks[f];
				e === g && c.push(g)
			}
			return c
		}
		function c(a, c, twoDirect) {
			if (twoDirect != null && twoDirect == true) {
				var d = b(a, c),
					e = b(c, a),
					f = d.concat(e);
				return f
			}
			return b(a, c)
		}
		function d(a) {
			var b = c(a.source, a.target);
			return b = b.filter(function(b) {
				return a !== b
			})
		}
		function e(a, b, twoDirect) {
			return c(a, b, twoDirect).length
		}
		function f(b, c, g) {
			function h(b, c) {
				var d = a.util.lineF(b.cx, b.cy, c.cx, c.cy),
					e = b.getBound(),
					f = a.util.intersectionLineBound(d, e);
				return f
			}
			this.initialize = function(b, c, d) {
				if (f.prototype.initialize.apply(this, arguments), this.elementType = "link", this.zIndex = a.zIndex_Link, 0 != arguments.length) {
					this.text = d, this.source = b, this.target = c, this.source && null == this.source.outLinks && (this.source.outLinks = []), this.source && null == this.source.inLinks && (this.source.inLinks = []), this.target && null == this.target.inLinks && (this.target.inLinks = []), this.target && null == this.target.outLinks && (this.target.outLinks = []), null != this.source && this.source.outLinks.push(this), null != this.target && this.target.inLinks.push(this), this.caculateIndex(), this.font = "13px yahei", this.fontColor = "120,120,120", this.lineWidth = 3, this.lineJoin = "miter", this.transformAble = !1, this.bundleOffset = 20, this.bundleGap = 6, this.textOffsetX = 0, this.textOffsetY = 0, this.arrowsRadius = null, this.arrowsOffset = 0, this.dashedPattern = null, this.path = [];
					var e = "text,font,fontColor,lineWidth,lineJoin".split(",");
					this.serializedProperties = this.serializedProperties.concat(e)
				}
			}, this.caculateIndex = function() {
				var a = e(this.source, this.target, false);
				if (a > 0) {
					this.nodeIndex = a - 1
				}
			}, this.initialize(b, c, g), this.removeHandler = function() {
				var a = this;
				this.source && this.source.outLinks && (this.source.outLinks = this.source.outLinks.filter(function(b) {
					return b !== a
				})), this.target && this.target.inLinks && (this.target.inLinks = this.target.inLinks.filter(function(b) {
					return b !== a
				}));
				var b = d(this);
				b.forEach(function(a, b) {
					a.nodeIndex = b
				})
			}, this.getStartPosition = function() {
				var a = {
					x: this.source.cx,
					y: this.source.cy
				};
				return a
			}, this.getEndPosition = function() {
				var a;
				return null != this.arrowsRadius && (a = h(this.target, this.source)), null == a && (a = {
					x: this.target.cx,
					y: this.target.cy
				}), a
			}, this.getPath = function() {
				var a = [],
					b = this.getStartPosition(),
					c = this.getEndPosition();
				if (this.source === this.target) return [b, c];
				var d = e(this.source, this.target);
				if (1 == d) return [b, c];
				var f = Math.atan2(c.y - b.y, c.x - b.x),
					g = {
						x: b.x + this.bundleOffset * Math.cos(f),
						y: b.y + this.bundleOffset * Math.sin(f)
					},
					h = {
						x: c.x + this.bundleOffset * Math.cos(f - Math.PI),
						y: c.y + this.bundleOffset * Math.sin(f - Math.PI)
					},
					i = f - Math.PI / 2,
					j = f - Math.PI / 2,
					k = d * this.bundleGap / 2 - this.bundleGap / 2,
					l = this.bundleGap * this.nodeIndex,
					m = {
						x: g.x + l * Math.cos(i),
						y: g.y + l * Math.sin(i)
					},
					n = {
						x: h.x + l * Math.cos(j),
						y: h.y + l * Math.sin(j)
					};
				return m = {
					x: m.x + k * Math.cos(i - Math.PI),
					y: m.y + k * Math.sin(i - Math.PI)
				}, n = {
					x: n.x + k * Math.cos(j - Math.PI),
					y: n.y + k * Math.sin(j - Math.PI)
				}, a.push({
					x: b.x,
					y: b.y
				}), a.push({
					x: m.x,
					y: m.y
				}), a.push({
					x: n.x,
					y: n.y
				}), a.push({
					x: c.x,
					y: c.y
				}), a
			}, this.paintPath = function(a, b) {
				if (this.source === this.target) return this.paintLoop(a);
				a.beginPath(), a.moveTo(b[0].x, b[0].y);
				for (var c = 1; c < b.length; c++) null == this.dashedPattern ? a.lineTo(b[c].x, b[c].y) : a.DGraphDashedLineTo(b[c - 1].x, b[c - 1].y, b[c].x, b[c].y, this.dashedPattern);
				if (a.stroke(), a.closePath(), null != this.arrowsRadius) {
					var d = b[b.length - 2],
						e = b[b.length - 1];
					this.paintArrow(a, d, e)
				}
			}, this.paintLoop = function(a) {
				var radius = this.source.radius / 2;
				var b = Math.round(radius + (this.nodeIndex + 1));
				a.beginPath(), a.arc(this.source.x - radius / 2, this.source.y - radius / 2, b, 0, 2 * Math.PI), a.stroke(), a.closePath()
			}, this.paintArrow = function(b, c, d) {
				var e = this.arrowsOffset,
					f = this.arrowsRadius / 2,
					g = c,
					h = d,
					i = Math.atan2(h.y - g.y, h.x - g.x),
					j = a.util.getDistance(g, h) - this.arrowsRadius,
					k = g.x + (j + e) * Math.cos(i),
					l = g.y + (j + e) * Math.sin(i),
					m = h.x + e * Math.cos(i),
					n = h.y + e * Math.sin(i);
				i -= Math.PI / 2;
				var o = {
						x: k + f * Math.cos(i),
						y: l + f * Math.sin(i)
					},
					p = {
						x: k + f * Math.cos(i - Math.PI),
						y: l + f * Math.sin(i - Math.PI)
					};
				b.beginPath(), b.fillStyle = "rgba(" + this.strokeColor + "," + this.alpha + ")", b.moveTo(o.x, o.y), b.lineTo(m, n), b.lineTo(p.x, p.y), b.fill(), b.closePath()
			}, this.paint = function(a) {
				if (null != this.source && null != !this.target) {
					var b = this.getPath(this.nodeIndex);
					this.path = b, a.strokeStyle = "rgba(" + this.strokeColor + "," + this.alpha + ")", a.lineWidth = this.lineWidth, this.paintPath(a, b), b && b.length > 0 && this.paintText(a, b)
				}
			};
			var i = -(Math.PI / 2 + Math.PI / 4);
			this.paintText = function(a, b) {
				var c = b[0],
					d = b[b.length - 1];
				if (4 == b.length && (c = b[1], d = b[2]), this.text && this.text.length > 0) {
					var e = (d.x + c.x) / 2 + this.textOffsetX,
						f = (d.y + c.y) / 2 + this.textOffsetY;
					a.save(), a.beginPath(), a.font = this.font;
					var g = a.measureText(this.text).width,
						h = a.measureText("田").width;
					a.fillStyle = "rgba(" + this.fontColor + ", " + this.alpha + ")";
					if (this.source === this.target) {
						var j = this.bundleGap * (this.nodeIndex + 3) / 2,
							e = this.source.x + j * Math.cos(i),
							f = this.source.y + j * Math.sin(i);
						a.fillText(this.text, e, f)
					} else {
						a.translate(e, f);
						a.fillText(this.text, 0, 0)
					}
					a.stroke(), a.closePath(), a.restore()
				}
			}, this.paintSelected = function(a) {
				a.shadowBlur = 5, a.shadowColor = "rgba(10,250,10,0.9)", a.shadowOffsetX = 0, a.shadowOffsetY = 0
			}, this.isInBound = function(b, c) {
				if (this.source === this.target) {
					var d = Math.round(this.source.radius / 2 + (this.nodeIndex + 1)),
						e = a.util.getDistance(this.source, {
							x: b,
							y: c
						}) - d;
					return Math.abs(e) <= 3
				}
				for (var f = !1, g = 1; g < this.path.length; g++) {
					var h = this.path[g - 1],
						i = this.path[g];
					if (1 == a.util.isPointInLine({
						x: b,
						y: c
					}, h, i)) {
						f = !0;
						break
					}
				}
				return f
			}
		}
		function g(a, b, c) {
			this.initialize = function() {
				g.prototype.initialize.apply(this, arguments), this.direction = "horizontal"
			}, this.initialize(a, b, c), this.getStartPosition = function() {
				var a = {
					x: this.source.cx,
					y: this.source.cy
				};
				return "horizontal" == this.direction ? this.target.cx > a.x ? a.x += this.source.width / 2 : a.x -= this.source.width / 2 : this.target.cy > a.y ? a.y += this.source.height / 2 : a.y -= this.source.height / 2, a
			}, this.getEndPosition = function() {
				var a = {
					x: this.target.cx,
					y: this.target.cy
				};
				return "horizontal" == this.direction ? this.source.cy < a.y ? a.y -= this.target.height / 2 : a.y += this.target.height / 2 : a.x = this.source.cx < a.x ? this.target.x : this.target.x + this.target.width, a
			}, this.getPath = function(a) {
				var b = [],
					c = this.getStartPosition(),
					d = this.getEndPosition();
				if (this.source === this.target) return [c, d];
				var f, g, h = e(this.source, this.target),
					i = (h - 1) * this.bundleGap,
					j = this.bundleGap * a - i / 2;
				return "horizontal" == this.direction ? (f = d.x + j, g = c.y - j, b.push({
					x: c.x,
					y: g
				}), b.push({
					x: f,
					y: g
				}), b.push({
					x: f,
					y: d.y
				})) : (f = c.x + j, g = d.y - j, b.push({
					x: f,
					y: c.y
				}), b.push({
					x: f,
					y: g
				}), b.push({
					x: d.x,
					y: g
				})), b
			}, this.paintText = function(a, b) {
				if (this.text && this.text.length > 0) {
					var c = b[1],
						d = c.x + this.textOffsetX,
						e = c.y + this.textOffsetY;
					a.save(), a.beginPath(), a.font = this.font;
					var f = a.measureText(this.text).width,
						g = a.measureText("田").width;
					a.fillStyle = "rgba(" + this.fontColor + ", " + this.alpha + ")", a.fillText(this.text, d - f / 2, e - g / 2), a.stroke(), a.closePath(), a.restore()
				}
			}
		}
		function edge(a, b, c) { //todo 设置边的各种属性
			this.initialize = function() {
				g.prototype.initialize.apply(this, arguments)
			}, this.initialize(a, b, c), this.paint = function(a) {
				if (null != this.source && null != !this.target) {
					if (this.colorType == 's') {
						this.strokeColor = this.source.fillColor
					} else if (this.colorType == 't') {
						this.strokeColor = this.target.fillColor
					}
					if (this.source === this.target) {
						this.setLineStyle(a);
						this.bundleGap = this.width / 2;
						this.paintLoop(a);
						if (this.showlabel) {
							this.text = this.label;
							this.paintText(a, b)
						} else {
							this.text = null
						}
						return
					}
					if (e(this.target, this.source, true) > 1) {
						this.lineType = 'curver'
					}
					this.paintPath(a, b);
					if (this.showlabel) {
						this.text = this.label;
						this.paintText(a, b)
					} else {
						this.text = null
					}
					if (this.showArrow) {
						this.paintArrow(a)
					}
				}
			};
			this.paintPath = function(a, b) {
				var lineType = this.lineType;
				switch (lineType) {
					case 'direct':
						this.paintDrirectLine(a, b);
						break;
					case 'curver':
						this.paintCurverLink(a, b);
						break;
					case 'vdirect':
						this.lineDash = [8, 5];
						this.paintDrirectLine(a, b);
						break;
					case 'vcurver':
						this.lineDash = [8, 5];
						this.paintCurverLink(a, b);
						break;
					case 'vlink':
						this.paintVerticalLink(a, b);
						break;
					case 'hlink':
						this.paintHorizolLink(a, b);
						break;
					case 'bezier':
						this.paintBezierLink(a, b);
						break;
					case 'vbezier':
						this.paintVBezierLink(a, b);
						break;
					case 'hbezier':
						this.paintHBezierLink(a, b);
						break;
					default:
						this.paintDrirectLine(a, b);
						break
				}
			}, this.paintText = function(a, b) {
				if (this.source === this.target) {
					var i = -(Math.PI / 2 + Math.PI / 4);
					var j = this.bundleGap * (this.nodeIndex + 1) / 2,
						e = this.source.x + j * Math.cos(i),
						f = this.source.y + j * Math.sin(i);
					a.save();
					a.beginPath();
					a.fillStyle = "rgba(" + this.fontColor + ", " + this.alpha + ")", a.fillText(this.text, e, f), a.stroke(), a.closePath(), a.restore();
					return
				}
				if (this.lineType == 'direct' || this.lineType == 'vdirect') {
					this.paintDrirectLineText(a, b)
				}
			}, this.paintArrow = function(a) {
				if (this.lineType == 'direct' || this.lineType == 'vdirect') {
					this.paintDrirectLineArrow(a)
				}
			}, this.setLineStyle = function(a) {
				a.lineJoin = "round";
				if (this.colorType == 'both') {
					var grd = a.createLinearGradient(this.source.cx, this.source.cy, this.target.cx, this.target.cy);
					grd.addColorStop(0, "rgba(" + this.source.fillColor + "," + this.alpha + ")");
					grd.addColorStop(1, "rgba(" + this.target.fillColor + "," + this.alpha + ")");
					a.strokeStyle = grd
				} else {
					a.strokeStyle = "rgba(" + this.strokeColor + "," + this.alpha + ")"
				}
				a.lineWidth = this.lineWidth;
				if (this.lineDash && this.lineDash.length > 1) {
					a.setLineDash(this.lineDash)
				}
			}, this.paintCurverLink = function(a) {
				var source = this.source,
					target = this.target;
				var sSize = (source.radius / 2 * source.scaleX) || 20,
					tSize = (target.radius / 2 * target.scaleX) || 20,
					sX = source.cx,
					sY = source.cy,
					lineAngle = Math.atan2(target.cy - source.cy, target.cx - source.cx),
					tX = target.cx - tSize * Math.cos(lineAngle),
					tY = target.cy - tSize * Math.sin(lineAngle),
					sX = source.cx + sSize * Math.cos(lineAngle),
					sY = source.cy + sSize * Math.sin(lineAngle),
					dX = tX - sX,
					dY = tY - sY,
					sign = (sX < tX) ? 1 : -1,
					cp = {},
					c, angle, t = 0.5,
					aSize = this.getArrowRadius(),
					d, aX, aY, vX, vY;
				if (source.id === target.id) {
					cp = this.getSelfLoopControlPoints(sX, sY, sSize);
					c = this.getPointOnBezierCurve(t, sX, sY, tX, tY, cp.x1, cp.y1, cp.x2, cp.y2);
					angle = Math.atan2(1, 1)
				} else {
					var curverNum = 4 - (this.nodeIndex * 0.5);
					if (this.nodeIndex / 2 == 0) {
						curverNum = -curverNum
					}
					cp = this.getQuadraticControlPoint(sX, sY, tX, tY, curverNum);
					c = this.getPointOnQuadraticCurve(t, sX, sY, tX, tY, cp.x, cp.y);
					angle = Math.atan2(dY * sign, dX * sign)
				}
				a.beginPath();
				a.moveTo(sX, sY);
				this.setLineStyle(a);
				if (source.id === target.id) {
					a.bezierCurveTo(cp.x1, cp.y1, cp.x2, cp.y2, tX, tY)
				} else {
					a.quadraticCurveTo(cp.x, cp.y, tX, tY)
				}
				a.stroke(), a.closePath();
				this.path = [];
				this.path.push({
					x: sX,
					y: sY
				});
				this.path.push({
					x: (sX + cp.x) / 2,
					y: (sY + cp.y) / 2
				});
				this.path.push({
					x: (tX + cp.x) / 2,
					y: (tY + cp.y) / 2
				});
				this.path.push({
					x: tX,
					y: tY
				});
				if (this.showArrow) {
					if (source.id === target.id) {
						d = Math.sqrt(Math.pow(tX - cp.x1, 2) + Math.pow(tY - cp.y1, 2));
						aX = cp.x1 + (tX - cp.x1) * (d - aSize - tSize) / d;
						aY = cp.y1 + (tY - cp.y1) * (d - aSize - tSize) / d;
						vX = (tX - cp.x1) * aSize / d;
						vY = (tY - cp.y1) * aSize / d
					} else {
						d = Math.sqrt(Math.pow(tX - cp.x, 2) + Math.pow(tY - cp.y, 2));
						aX = cp.x + (tX - cp.x) * (d - aSize) / d;
						aY = cp.y + (tY - cp.y) * (d - aSize) / d;
						vX = (tX - cp.x) * aSize / d;
						vY = (tY - cp.y) * aSize / d
					}
					a.save();
					a.beginPath();
					a.moveTo(aX + vX, aY + vY);
					a.lineTo(aX + vY * t, aY - vX * t);
					a.lineTo(aX - vY * t, aY + vX * t);
					a.lineTo(aX + vX, aY + vY);
					a.closePath();
					a.fillStyle = "rgba(" + this.strokeColor + "," + this.alpha + ")", a.fill();
					a.restore()
				}
				if (this.showlabel && this.text && this.text.length > 0) {
					a.save();
					a.font = this.font;
					a.fillStyle = "rgba(" + this.fontColor + ", " + this.alpha + ")";
					a.textAlign = 'center';
					a.textBaseline = 'alphabetic';
					a.translate(c.x, c.y);
					a.rotate(angle);
					a.fillText(this.text, 0, (-this.lineWidth / 2) - 3);
					a.restore()
				}
			}, this.paintDrirectLine = function(a) {
				a.beginPath(), a.moveTo(this.source.cx, this.source.cy);
				this.setLineStyle(a);
				a.lineTo(this.target.cx, this.target.cy), a.stroke(), a.closePath();
				this.path = [];
				this.path.push({
					x: this.source.cx,
					y: this.source.cy
				});
				this.path.push({
					x: this.target.cx,
					y: this.target.cy
				})
			}, this.paintDrirectLineText = function(a, b) {
				const start = this.source;
				const end = this.target;
				const textPos = {
					x: start.cx + (end.cx - start.cx) / 2,
					y: start.cy + (end.cy - start.cy) / 2
				};
				const relLink = {
					x: end.cx - start.cx,
					y: end.cy - start.cy
				};
				let textAngle = Math.atan2(relLink.y, relLink.x);
				if (textAngle > Math.PI / 2) textAngle = -(Math.PI - textAngle);
				if (textAngle < -Math.PI / 2) textAngle = -(-Math.PI - textAngle);
				a.save(), a.beginPath(), a.font = this.font;
				a.translate(textPos.x, textPos.y);
				a.rotate(textAngle);
				a.textAlign = 'center';
				a.textBaseline = 'bottom';
				a.fillStyle = "rgba(" + this.fontColor + ", " + this.alpha + ")";
				a.fillText(this.text, 0, 0);
				a.stroke(), a.closePath(), a.restore()
			}, this.paintDrirectLineArrow = function(b) {
				var c = {
						x: this.source.cx,
						y: this.source.cy
					},
					d = {
						x: this.target.cx,
						y: this.target.cy
					};
				this.arrowsOffset = -this.target.radius / 2 * this.target.scaleX;
				this.arrowsRadius = this.getArrowRadius();
				var e = this.arrowsOffset,
					f = this.arrowsRadius / 2,
					g = c,
					h = d,
					i = Math.atan2(h.y - g.y, h.x - g.x),
					j = Math.sqrt((g.x - h.x) * (g.x - h.x) + (g.y - h.y) * (g.y - h.y)) - this.arrowsRadius,
					k = g.x + (j + e) * Math.cos(i),
					l = g.y + (j + e) * Math.sin(i),
					m = h.x + e * Math.cos(i),
					n = h.y + e * Math.sin(i);
				i -= Math.PI / 2;
				var o = {
						x: k + f * Math.cos(i),
						y: l + f * Math.sin(i)
					},
					p = {
						x: k + f * Math.cos(i - Math.PI),
						y: l + f * Math.sin(i - Math.PI)
					};
				b.beginPath(), b.fillStyle = "rgba(" + this.strokeColor + "," + this.alpha + ")", b.moveTo(o.x, o.y), b.lineTo(m, n), b.lineTo(p.x, p.y), b.fill(), b.closePath()
			}, this.getArrowRadius = function() {
				var raduis = 2 * this.lineWidth;
				return Math.max(raduis, 8)
			}, this.paintSpecialArrow = function(b, sourceP, targetP) {
				var c = {
						x: sourceP.x,
						y: sourceP.y
					},
					d = {
						x: targetP.x,
						y: targetP.y
					};
				this.arrowsOffset = -this.target.radius / 2 * this.target.scaleX;
				this.arrowsRadius = this.getArrowRadius();
				var e = this.arrowsOffset,
					f = this.arrowsRadius / 2,
					g = c,
					h = d,
					i = Math.atan2(h.y - g.y, h.x - g.x),
					j = Math.sqrt((g.x - h.x) * (g.x - h.x) + (g.y - h.y) * (g.y - h.y)) - this.arrowsRadius,
					k = g.x + (j + e) * Math.cos(i),
					l = g.y + (j + e) * Math.sin(i),
					m = h.x + e * Math.cos(i),
					n = h.y + e * Math.sin(i);
				i -= Math.PI / 2;
				var o = {
						x: k + f * Math.cos(i),
						y: l + f * Math.sin(i)
					},
					p = {
						x: k + f * Math.cos(i - Math.PI),
						y: l + f * Math.sin(i - Math.PI)
					};
				b.beginPath(), b.fillStyle = "rgba(" + this.strokeColor + "," + this.alpha + ")", b.moveTo(o.x, o.y), b.lineTo(m, n), b.lineTo(p.x, p.y), b.fill(), b.closePath()
			}, this.paintVerticalLink = function(cxt) {
				var source = this.source,
					target = this.target;
				var sourceX = source.cx,
					sourceY = source.cy;
				var targetX = target.cx,
					targetY = target.cy;
				cxt.beginPath();
				this.setLineStyle(cxt);
				cxt.moveTo(source.cx, source.cy);
				cxt.lineTo(sourceX, (sourceY + targetY) / 2);
				cxt.lineTo(targetX, (sourceY + targetY) / 2);
				cxt.lineTo(target.cx, target.cy);
				cxt.stroke();
				cxt.closePath();
				this.path = [];
				this.path.push({
					x: sourceX,
					y: sourceY
				});
				this.path.push({
					x: sourceX,
					y: (sourceY + targetY) / 2
				});
				this.path.push({
					x: targetX,
					y: (sourceY + targetY) / 2
				});
				this.path.push({
					x: targetX,
					y: targetY
				});
				if (this.showArrow) {
					this.paintSpecialArrow(cxt, {
						x: targetX,
						y: (sourceY + targetY) / 2
					}, {
						x: targetX,
						y: targetY
					})
				}
			}, this.paintHorizolLink = function(cxt) {
				var source = this.source,
					target = this.target;
				var sourceX = source.cx,
					sourceY = source.cy;
				var targetX = target.cx,
					targetY = target.cy;
				cxt.beginPath();
				this.setLineStyle(cxt);
				cxt.moveTo(source.cx, source.cy);
				cxt.lineTo((sourceX + targetX) / 2, sourceY);
				cxt.lineTo((sourceX + targetX) / 2, targetY);
				cxt.lineTo(target.cx, target.cy);
				cxt.stroke();
				cxt.closePath();
				this.path = [];
				this.path.push({
					x: sourceX,
					y: sourceY
				});
				this.path.push({
					x: (sourceX + targetX) / 2,
					y: sourceY
				});
				this.path.push({
					x: (sourceX + targetX) / 2,
					y: targetY
				});
				this.path.push({
					x: targetX,
					y: targetY
				});
				if (this.showArrow) {
					this.paintSpecialArrow(cxt, {
						x: (sourceX + targetX) / 2,
						y: targetY
					}, {
						x: targetX,
						y: targetY
					})
				}
			}, this.paintBezierLink = function(cxt) {
				var source = this.source,
					target = this.target;
				var sourceX = source.cx,
					sourceY = source.cy;
				var targetX = target.cx,
					targetY = target.cy;
				var tarrowRaduis = this.getArrowRadius();
				var ydistance = targetY - sourceY;
				var ss = Math.max(ydistance / 6, 10);
				var x3 = sourceX,
					y3 = sourceY;
				var x4 = targetX,
					y4 = targetY - ss - (target.width / 4 * target.scaleX) - (tarrowRaduis * target.scaleX);
				var t = 0.5;
				if (sourceY > targetY) {
					y4 = targetY + ss + (target.width / 4 * target.scaleX) + (tarrowRaduis * target.scaleX)
				}
				var x5 = sourceX;
				var y5 = (y3 + y4) * t;
				var x6 = targetX;
				var y6 = (y3 + y4) * t;
				cxt.beginPath();
				this.setLineStyle(cxt);
				cxt.moveTo(sourceX, sourceY);
				cxt.lineTo(x3, y3);
				cxt.bezierCurveTo(x5, y5, x6, y6, x4, y4);
				cxt.lineTo(targetX, targetY);
				cxt.stroke();
				cxt.closePath();
				this.path = [];
				this.path.push({
					x: sourceX,
					y: sourceY
				});
				this.path.push({
					x: x3,
					y: y3
				});
				this.path.push({
					x: x5,
					y: y5
				});
				this.path.push({
					x: x6,
					y: y6
				});
				this.path.push({
					x: x4,
					y: y4
				});
				this.path.push({
					x: targetX,
					y: targetY
				});
				if (this.showArrow) {
					this.paintSpecialArrow(cxt, {
						x: x4,
						y: y4
					}, {
						x: target.cx,
						y: target.cy
					})
				}
			}, this.paintHBezierLink = function(cxt) {
				var source = this.source,
					target = this.target;
				var sourceX = source.cx,
					sourceY = source.cy;
				var targetX = target.cx - (target.width / 2 * target.scaleX) - (this.getArrowRadius() * target.scaleX),
					targetY = target.cy;
				if (sourceX > target.cx) {
					targetX = target.cx + (target.width / 2 * target.scaleX) + (this.getArrowRadius() * target.scaleX)
				}
				var x3 = (sourceX + targetX) * 0.5;
				var y3 = sourceY;
				var x4 = (sourceX + targetX) * 0.5;
				var y4 = targetY;
				cxt.beginPath();
				this.setLineStyle(cxt);
				cxt.moveTo(source.cx, source.cy);
				cxt.bezierCurveTo(x3, y3, x4, y4, targetX, targetY);
				cxt.lineTo(target.cx, target.cy);
				cxt.stroke();
				cxt.closePath();
				this.path = [];
				this.path.push({
					x: sourceX,
					y: sourceY
				});
				this.path.push({
					x: x3,
					y: y3
				});
				this.path.push({
					x: x4,
					y: y4
				});
				this.path.push({
					x: targetX,
					y: targetY
				});
				this.path.push({
					x: target.cx,
					y: target.cy
				});
				if (this.showArrow) {
					this.paintSpecialArrow(cxt, {
						x: targetX,
						y: targetY
					}, {
						x: target.cx,
						y: target.cy
					})
				}
			}, this.paintVBezierLink = function(cxt) {
				var source = this.source,
					target = this.target;
				var sourceX = source.cx,
					sourceY = source.cy;
				var targetX = target.cx,
					targetY = target.cy - (target.width / 2 * target.scaleX) - (this.getArrowRadius() * target.scaleX);
				if (sourceY > target.cy) {
					targetY = target.cy + (target.width / 2 * target.scaleX) + (this.getArrowRadius() * target.scaleX)
				}
				var x3 = sourceX;
				var y3 = (sourceY + targetY) * 0.5;
				var x4 = targetX;
				var y4 = (sourceY + targetY) * 0.5;
				cxt.beginPath();
				this.setLineStyle(cxt);
				cxt.moveTo(source.cx, source.cy);
				cxt.bezierCurveTo(x3, y3, x4, y4, targetX, targetY);
				cxt.lineTo(targetX, target.cy);
				cxt.stroke();
				cxt.closePath();
				this.path = [];
				this.path.push({
					x: sourceX,
					y: sourceY
				});
				this.path.push({
					x: x3,
					y: y3
				});
				this.path.push({
					x: x4,
					y: y4
				});
				this.path.push({
					x: targetX,
					y: targetY
				});
				this.path.push({
					x: target.cx,
					y: target.cy
				});
				if (this.showArrow) {
					this.paintSpecialArrow(cxt, {
						x: targetX,
						y: targetY
					}, {
						x: target.cx,
						y: target.cy
					})
				}
			}, this.getSelfLoopControlPoints = function(x, y, size) {
				return {
					x1: x - size * 7,
					y1: y,
					x2: x,
					y2: y + size * 7
				}
			};
			this.getPointOnBezierCurve = function(t, x1, y1, x2, y2, cx, cy, dx, dy) {
				var B0_t = Math.pow(1 - t, 3),
					B1_t = 3 * t * Math.pow(1 - t, 2),
					B2_t = 3 * Math.pow(t, 2) * (1 - t),
					B3_t = Math.pow(t, 3);
				return {
					x: (B0_t * x1) + (B1_t * cx) + (B2_t * dx) + (B3_t * x2),
					y: (B0_t * y1) + (B1_t * cy) + (B2_t * dy) + (B3_t * y2)
				}
			};
			this.getQuadraticControlPoint = function(x1, y1, x2, y2, curverNum) {
				return {
					x: (x1 + x2) / 2 + (y2 - y1) / (curverNum || 4),
					y: (y1 + y2) / 2 + (x1 - x2) / (curverNum || 4)
				}
			};
			this.getPointOnQuadraticCurve = function(t, x1, y1, x2, y2, xi, yi) {
				var dd = 2;
				return {
					x: Math.pow(1 - t, dd) * x1 + 2 * (1 - t) * t * xi + Math.pow(t, dd) * x2,
					y: Math.pow(1 - t, dd) * y1 + 2 * (1 - t) * t * yi + Math.pow(t, dd) * y2
				}
			}
		}
		f.prototype = new a.InteractiveElement, a.Link = f, g.prototype = new f, a.FLink = g, edge.prototype = new f, a.Edge = edge
	}(DGraph), function(a) {
		function b(c) {
			this.initialize = function(c) {
				b.prototype.initialize.apply(this, null), this.elementType = "box", this.zIndex = a.zIndex_Box, this.width = 100, this.height = 100, this.childs = [], this.alpha = 0.5, this.dragable = !0, this.childDragble = !0, this.visible = !0, this.fillColor = "10,250,10", this.borderWidth = 0, this.borderColor = "255,255,255", this.borderRadius = null, this.font = "20px yahei", this.fontColor = "0,255,0", this.text = c, this.textPosition = "Top_Left", this.textOffsetX = 0, this.textOffsetY = 30, this.layout = new a.layout.AutoBoxLayout
			}, this.initialize(c), this.add = function(a) {
				this.childs.push(a), a.dragable = this.childDragble
			}, this.remove = function(a) {
				for (var b = 0; b < this.childs.length; b++) if (this.childs[b] === a) {
					a.parentContainer = null, this.childs = this.childs.del(b), a.lastParentContainer = this;
					break
				}
			}, this.removeAll = function() {
				this.childs = []
			}, this.setLocation = function(a, b) {
				var c = a - this.x,
					d = b - this.y;
				this.x = a, this.y = b;
				for (var e = 0; e < this.childs.length; e++) {
					var f = this.childs[e];
					f.setLocation(f.x + c, f.y + d)
				}
			}, this.doLayout = function(a) {
				a && a(this, this.childs)
			}, this.paint = function(a) {
				var radius = Math.sqrt((this.width / 2) * (this.width / 2) + (this.height / 2) * (this.height / 2));
				this.visible && (this.layout && this.layout(this, this.childs), a.beginPath(), a.fillStyle = "rgba(" + this.fillColor + "," + this.alpha + ")", a.strokeStyle = "rgba(" + this.fillColor + ",1)", a.lineWidth = 2, a.arc(this.cx, this.cy, radius, 0, 2 * Math.PI), a.fill(), a.stroke(), a.closePath(), this.paintText(a))
			}, this.paintBorder = function(a) {
				if (0 != this.borderWidth) {
					a.beginPath(), a.lineWidth = this.borderWidth, a.strokeStyle = "rgba(" + this.borderColor + "," + this.alpha + ")";
					var b = this.borderWidth / 2;
					null == this.borderRadius || 0 == this.borderRadius ? a.rect(this.x - b, this.y - b, this.width + this.borderWidth, this.height + this.borderWidth) : a.DGraphRoundRect(this.x - b, this.y - b, this.width + this.borderWidth, this.height + this.borderWidth, this.borderRadius), a.stroke(), a.closePath()
				}
			}, this.paintText = function(a) {
				var b = this.text;
				if (null != b && "" != b) {
					a.beginPath(), a.font = this.font;
					var c = a.measureText(b).width,
						d = a.measureText("田").width;
					a.fillStyle = "rgba(" + this.fontColor + ", " + this.alpha + ")";
					var e = this.getTextPostion(this.textPosition, c, d);
					a.fillText(b, e.x, e.y), a.closePath()
				}
			}, this.getTextPostion = function(a, b, c) {
				var d = null;
				return null == a || "Bottom_Center" == a ? d = {
					x: this.x + this.width / 2 - b / 2,
					y: this.y + this.height + c
				} : "Top_Center" == a ? d = {
					x: this.x + this.width / 2 - b / 2,
					y: this.y - c / 2
				} : "Top_Right" == a ? d = {
					x: this.x + this.width - b,
					y: this.y - c / 2
				} : "Top_Left" == a ? d = {
					x: this.x,
					y: this.y - c / 2
				} : "Bottom_Right" == a ? d = {
					x: this.x + this.width - b,
					y: this.y + this.height + c
				} : "Bottom_Left" == a ? d = {
					x: this.x,
					y: this.y + this.height + c
				} : "Middle_Center" == a ? d = {
					x: this.x + this.width / 2 - b / 2,
					y: this.y + this.height / 2 + c / 2
				} : "Middle_Right" == a ? d = {
					x: this.x + this.width - b,
					y: this.y + this.height / 2 + c / 2
				} : "Middle_Left" == a && (d = {
					x: this.x,
					y: this.y + this.height / 2 + c / 2
				}), null != this.textOffsetX && (d.x += this.textOffsetX), null != this.textOffsetY && (d.y += this.textOffsetY), d
			}, this.paintMouseover = function(a) {
				this.paintSelected(a)
			}, this.paintSelected = function(a) {
				var radius = Math.sqrt((this.width / 2) * (this.width / 2) + (this.height / 2) * (this.height / 2));
				a.save(), a.beginPath(), a.strokeStyle = "rgba(" + this.fillColor + ",0.5)", a.lineWidth = 8, a.arc(this.cx, this.cy, radius, 0, 2 * Math.PI), a.stroke(), a.closePath(), a.restore()
			}, this.setLayoutType = function(layoutType) {
				if (layoutType == 'grid') {
					this.layout = new DGraph.layout.GridLayout
				} else if (layoutType == 'circle') {
					this.layout = new DGraph.layout.CircleLayout
				} else {
					this.layout = new DGraph.layout.AutoBoxLayout
				}
			}
		}
		b.prototype = new a.InteractiveElement, a.Box = b
	}(DGraph), function(a) {
		function autoSize() {
			return function(box, childsNodes) {
				var nodeCount = childsNodes.length;
				if (nodeCount > 0) {
					var padding = 0;
					for (var c = 1e7, d = -1e7, e = 1e7, f = -1e7, g = d - c, h = f - e, i = 0; i < nodeCount; i++) {
						var j = childsNodes[i];
						j.x <= c && (c = j.x), j.x >= d && (d = j.x), j.y <= e && (e = j.y), j.y >= f && (f = j.y), g = d - c + j.width, h = f - e + j.height
					}
					box.x = c - padding, box.y = e - padding, box.width = g + padding + (2 * padding), box.height = h + (2 * padding)
				}
			}
		};

		function circleLayout() {
			return function(box, childsNodes) {
				var nodeCount = childsNodes.length;
				var tempcirc = 0,
					temdiameter = 0,
					theta = 0;
				for (var i = 0; i < nodeCount; i++) {
					var n = childsNodes[i];
					tempcirc += (n.radius * 1.5)
				}
				temdiameter = tempcirc / Math.PI;
				theta = 2 * Math.PI / tempcirc;
				var radius = temdiameter / 2;
				var lasttheta = 0;
				var centerX = box.x + box.width / 2;
				var centerY = box.y + box.height / 2;
				for (var i = 0; i < nodeCount; i++) {
					var n = childsNodes[i];
					noderadius = n.radius;
					var noderadian = theta * noderadius;
					lasttheta += noderadius * 1.5 * theta;
					n.x = radius * Math.cos((lasttheta + noderadian) + Math.PI / 2) + centerX;
					n.y = radius * Math.sin((lasttheta + noderadian) + Math.PI / 2) + centerY
				}
				box.layout = new a.layout.AutoBoxLayout
			}
		};

		function gridLayout() {
			return function(box, childsNodes) {
				var nodeCount = childsNodes.length;
				var xGridScales = Math.round(Math.sqrt(nodeCount)) + 1;
				var yGridScales = Math.round(Math.sqrt(nodeCount)) + 1;
				childsNodes = childsNodes.sort(function(n1, n2) {
					var x = (n1.inLinks || []).length + (n1.outLinks || []).length;
					var y = (n2.inLinks || []).length + (n2.outLinks || []).length;
					return x > y ? -1 : 1
				});
				var horizontalScale = verticalScale = childsNodes[0].width * 2;
				var k = 0;
				for (var i = 0; i < xGridScales; i++) {
					for (var j = 0; j < yGridScales; j++) {
						if (k >= nodeCount) {
							continue
						}
						var node = childsNodes[k];
						node.x = j * horizontalScale + box.x;
						node.y = i * verticalScale + box.y;
						k++
					}
				}
				box.layout = new a.layout.AutoBoxLayout
			}
		};
		a.layout = a.Layout = {
			AutoBoxLayout: autoSize,
			CircleLayout: circleLayout,
			GridLayout: gridLayout
		}
	}(DGraph);
	var VisualGraph = function(container, config) {
		if (container == null || config == null) {
			return
		}
		this.stage = new DGraph.Stage(container);
		this.canvas = this.stage.canvas;
		this.scene = null;
		this.nodes = [];
		this.links = [];
		this.nodeIdIndex = 1;
		this.loopName = null;
		this.currentNode = null;
		this.currentLink = null;
		this.showLinkFlag = true;
		this.config = config || {};
		this.defaultNodeSize = 50;
		this.defaultNodeColor = '10,125,225';
		this.defaultLabelColor = '10,125,225';
		this.linkColorConfig = {
			linkColorType: 0,
			color: '115,115,115'
		};
		this.highLightNeiber = true;
		this.backGroundType = 'png';
		this.typeMapStyle = {};
		this.lineTypeMapStyle = {};
		this.currentLayout = null;
		this.isDerictedGraph = true;
		this.clusterBoxes = [];
		this.currentCluster = null;
		this.drawLinkFlag = false;
		this.virNode = null;
		this.apikey = null;
		this.wheelZoom = 0.9;
		this.ilayout = {
			size: [this.canvas.width || 1000, this.canvas.height || 600],
			alpha: 0.1,
			friction: 0.9,
			linkDistance: 150,
			linkStrength: 0.09,
			charge: -220,
			gravity: 0.015,
			theta: 0.8,
			counter: 0,
			loopName: null
		};
		this.init()
	};
	VisualGraph.prototype.checkHasPermission = function() {
		if (!this.config) {
			return false
		}
		var _apikey = this.config['apikey'];
		if (_apikey == null || LocalSign.checkKey(_apikey) == false) {
			return false
		}
		if (LocalSign.checkPeriod()) {
			return false
		}
		this.apikey = _apikey;
		return true
	};
	VisualGraph.prototype.init = function() {
		var _self = this;
		this.stage.wheelZoom = this.wheelZoom;
		if (_self.scene != null) {
			_self.scene.clear();
			_self.stage.remove(_self.scene)
		}
		_self.scene = new DGraph.Scene(this.stage);
		_self.nodes = [];
		_self.links = [];
		_self.typeMapStyle = {};
		_self.lineTypeMapStyle = {};
		if (_self.config.hasOwnProperty('highLightNeiber')) {
			_self.highLightNeiber = _self.config['highLightNeiber']
		}
		if (_self.config.hasOwnProperty('linkColorConfig')) {
			_self.linkColorConfig = _self.config['linkColorConfig']
		}
		_self.initDrawLinkBase()
	};
	VisualGraph.prototype.initDrawLinkBase = function() {
		var _self = this;
		var virNode = new DGraph.Node();
		virNode.radius = 1;
		virNode.show = false;
		virNode.dragable = false;
		virNode.fillColor = '10,10,10';
		virNode.alpha = 0.1;
		virNode.showSelected = false;
		_self.virNode = virNode;
		var pixelRatio = _self.stage.pixelRatio;
		_self.scene.mousemove(function(e) {
			if (_self.drawLinkFlag) {
				if (!_self.virNode.show) {
					_self.virNode.show = true;
					_self.scene.add(_self.virNode)
				}
				if (_self.virLink == null) {
					var virLink = new DGraph.Edge(_self.currentNode, _self.virNode);
					virLink.lineWidth = 2;
					virLink.alpha = 0.8;
					virLink.strokeColor = '50,250,50';
					virLink.lineDash = [5, 8];
					virLink.showSelected = false;
					_self.virLink = virLink;
					_self.scene.add(_self.virLink)
				}
				var position = {
					x: event.pageX - (_self.config.marginLeft || 0),
					y: event.pageY - (_self.config.marginTop || 0)
				};
				var p = _self.scene.toSceneEvent(position);
				_self.virNode.x = p.x * pixelRatio;
				_self.virNode.y = p.y * pixelRatio
			}
		});
		_self.scene.dbclick(function(e) {
			_self.drawLinkFlag = false;
			if (_self.virNode.show) {
				_self.virNode.show = false;
				_self.scene.remove(_self.virNode)
			}
			if (_self.virLink) {
				_self.scene.remove(_self.virLink);
				_self.virLink = null
			}
		});
		_self.scene.click(function(e) {
			_self.hideAllRightMenu()
		})
	};
	VisualGraph.prototype.hideAllRightMenu = function() {
		var _self = this;
		if (_self.config.hasOwnProperty('rightMenu')) {
			if (_self.config.rightMenu.hasOwnProperty('nodeMenu')) {
				_self.config['rightMenu']['nodeMenu'].hide()
			}
			if (_self.config.rightMenu.hasOwnProperty('linkMenu')) {
				_self.config['rightMenu']['linkMenu'].hide()
			}
			if (_self.config.rightMenu.hasOwnProperty('clusterMenu')) {
				_self.config['rightMenu']['clusterMenu'].hide()
			}
		}
	};
	VisualGraph.prototype.drawData = function(data, config) {
		var _self = this;
		if (data == null) {
			return
		}
		this.init();
		var showlabel = false;
		if (config) {
			if (config['nodeSize']) {
				_self.defaultNodeSize = Number(config['nodeSize']) || 35
			}
			if (config['nodeColor']) {
				_self.defaultNodeColor = _self.converHexToRGB(config['nodeColor']) || '10,125,225'
			}
			if (config['labelColor']) {
				//_self.defaultLabelColor = _self.converHexToRGB(config['labelColor']) || '115,115,115'
				_self.defaultLabelColor='0,0,0'
			}
			if (config['linkColor']) {
				_self.linkColorConfig = {
					linkColorType: config['linkColorType'] || 1,
					color: _self.converHexToRGB(config['linkColor']) || '115,115,115'
				}
			}
			showlabel = config['showlabel'] || false
		}
		var nodeIdMapNode = {};
		(data.nodes || []).forEach(function(n, i) {
			var node = _self.newNode(n, i);    //todo 画图谱的点
			node.showlabel = showlabel;
			_self.scene.add(node);
			_self.nodes.push(node);
			nodeIdMapNode[n.id] = node
		});
		(data.links || []).forEach(function(l) {
			var sourceId = l.source;   //todo 画图谱的边
			var targetId = l.target;
			var source = nodeIdMapNode[sourceId];
			if (source == undefined || source == null) {
				var n = {
					id: sourceId
				};
				var source = _self.newNode(n, 0);
				source.visible = true;
				_self.scene.add(source);
				_self.nodes.push(source);
				nodeIdMapNode[n.id] = source
			}
			var target = nodeIdMapNode[targetId];
			if (target == undefined || target == null) {
				var n = {
					id: targetId
				};
				target = _self.newNode(n, 0);
				target.visible = true;
				_self.scene.add(target);
				_self.nodes.push(target);
				nodeIdMapNode[n.id] = target
			}
			if (source && target) {
				var link = _self.newEdge(source, target);
				link.showlabel = showlabel;
				link.colorType = 's';
				link.type = l.type || '';
				link.label = l.label || l.type || '';
				link.weight = l.weight || 1;
				link.lineWidth = l.lineWidth || 3;
				_self.scene.add(link);
				_self.links.push(link);
				_self.setLineTypeMap(link)
			}
		});
		this.scene.translateToCenter()
	};
	VisualGraph.prototype.translateToCenter = function() {
		this.scene.translateToCenter()
	};
	VisualGraph.prototype.getColor = function(n) {
		var color = n.color;
		if (color) {
			color = color.replace('rgb(', '').replace(')', '')
		} else {
			color = this.defaultNodeColor
		}
		return color
	};
	VisualGraph.prototype.newNode = function(n) {
		var self = this;
		var width = this.stage.canvas.width || 500;
		var height = this.stage.canvas.height || 300;
		var node = new DGraph.Node();
		node.x = n.x || Math.round(Math.random() * width);
		node.y = n.y || Math.round(Math.random() * height);
		node.id = n.id;
		node.type = n.type || 'default';
		node.cluster = n.cluster || 'default';
		node.radius = Number(n.size) || self.defaultNodeSize;
		node.label = n.label || n.id;
		node.alpha = n.alpha || 1;
		node.fillColor = self.getColor(n);
		node.fontColor = n.fontColor || self.defaultLabelColor;
		node.textPosition = n.textPosition || 'Middle_Center';
		node.font = '12px yahei';
		node.borderWidth = n.borderWidth || 0;
		node.borderColor = n.borderColor || node.fillColor;
		node.scaleX = node.scaleY = n.scale || 1;
		node.shape = n.shape || 'circle';
		node.showlabel = n.showlabel || true;
		if (n.image && n.image.length > 0) {
			node.setImage(n.image)
		}
		node.properties = n.properties || {};
		self.setTypeMapWithNode(node);
		node.click(function(event) {
			if (self.drawLinkFlag && self.virLink != null) {
				var link = self.newEdge(self.virLink.source, this);
				link.type = 'default';
				self.links.push(link);
				self.scene.add(link);
				if (self.virNode.show) {
					self.virNode.show = false;
					self.scene.remove(self.virNode)
				}
				self.drawLinkFlag = false;
				if (self.virLink) {
					self.scene.remove(self.virLink);
					self.virLink = null
				}
			}
			self.currentNode = this;
			this.fixed = true;
			this.dx = this.x;
			this.dy = this.y;
			if (self.config.hasOwnProperty('onNodeClick')) {
				var onNodeClick = self.config['onNodeClick'];
				if (typeof onNodeClick === 'function') {
					onNodeClick(event, this)
				}
			}
			alert(node.label) //todo 哈哈哈哈
		});
		window.alert = function(msg, callback) {
			var div = document.createElement("div");
			div.innerHTML = "<style type=\"text/css\">"
				+ ".nbaMask { position: fixed; z-index: 1000; top: 0; right: 0; left: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); }                                                                                                                                                                       "
				+ ".nbaMaskTransparent { position: fixed; z-index: 1000; top: 0; right: 0; left: 0; bottom: 0; }                                                                                                                                                                                            "
				+ ".nbaDialog { position: fixed; z-index: 5000; width: 80%; max-width: 300px; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); background-color: #fff; text-align: center; border-radius: 8px; overflow: hidden; opacity: 1; color: white; }"
				+ ".nbaDialog .nbaDialogHd { padding: .2rem .27rem .08rem .27rem; }                                                                                                                                                                                                                         "
				+ ".nbaDialog .nbaDialogHd .nbaDialogTitle { font-size: 17px; font-weight: 400; }                                                                                                                                                                                                           "
				+ ".nbaDialog .nbaDialogBd { padding: 0 .27rem; font-size: 15px; line-height: 1.3; word-wrap: break-word; word-break: break-all; color: #000000; }                                                                                                                                          "
				+ ".nbaDialog .nbaDialogFt { position: relative; line-height: 48px; font-size: 17px; display: -webkit-box; display: -webkit-flex; display: flex; }                                                                                                                                          "
				+ ".nbaDialog .nbaDialogFt:after { content: \" \"; position: absolute; left: 0; top: 0; right: 0; height: 1px; border-top: 1px solid #e6e6e6; color: #e6e6e6; -webkit-transform-origin: 0 0; transform-origin: 0 0; -webkit-transform: scaleY(0.5); transform: scaleY(0.5); }               "
				+ ".nbaDialog .nbaDialogBtn { display: block; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; color: #09BB07; text-decoration: none; -webkit-tap-highlight-color: transparent; position: relative; margin-bottom: 0; }                                                                       "
				+ ".nbaDialog .nbaDialogBtn:after { content: \" \"; position: absolute; left: 0; top: 0; width: 1px; bottom: 0; border-left: 1px solid #e6e6e6; color: #e6e6e6; -webkit-transform-origin: 0 0; transform-origin: 0 0; -webkit-transform: scaleX(0.5); transform: scaleX(0.5); }             "
				+ ".nbaDialog a { text-decoration: none; -webkit-tap-highlight-color: transparent; }"
				+ "</style>"
				+ "<div id=\"dialogs2\" style=\"display: none\">"
				+ "<div class=\"nbaMask\"></div>"
				+ "<div class=\"nbaDialog\">"
				+ "	<div class=\"nbaDialogHd\">"
				+ "		<strong class=\"nbaDialogTitle\"></strong>"
				+ "	</div>"
				+ "	<div class=\"nbaDialogBd\" id=\"dialog_msg2\">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>"
				+ "	<div class=\"nbaDialogHd\">"
				+ "		<strong class=\"nbaDialogTitle\"></strong>"
				+ "	</div>"
				+ "	<div class=\"nbaDialogFt\">"
				+ "		<a href=\"javascript:;\" class=\"nbaDialogBtn nbaDialogBtnPrimary\" id=\"dialog_ok2\">确定</a>"
				+ "	</div></div></div>";
			document.body.appendChild(div);

			var dialogs2 = document.getElementById("dialogs2");
			dialogs2.style.display = 'block';

			var dialog_msg2 = document.getElementById("dialog_msg2");
			dialog_msg2.innerHTML = msg;

			// var dialog_cancel = document.getElementById("dialog_cancel");
			// dialog_cancel.onclick = function() {
			// dialogs2.style.display = 'none';
			// };
			var dialog_ok2 = document.getElementById("dialog_ok2");
			dialog_ok2.onclick = function() {
				dialogs2.style.display = 'none';
				callback();
			};
		};

		node.mousedrag(function(evt) {
			var _node = this;
			if (this.isDragging || self.scene.selectedElements.length > 1) {
				return false
			}
			this.isDragging = true;
			this.fixed = true;
			if (self.highLightNeiber) {
				self.nodes.forEach(function(n) {
					n.t_alpha = n.alpha;
					n.alpha = 0.1
				});
				_node.alpha = _node.t_alpha;
				(_node.inLinks || []).forEach(function(link) {
					if (link.source.visible) {
						link.source.alpha = link.source.t_alpha
					}
				});
				(_node.outLinks || []).forEach(function(link) {
					if (link.target.visible) {
						link.target.alpha = link.target.t_alpha
					}
				});
				if (self.showLinkFlag) {
					self.links.forEach(function(link) {
						link.visible = false
					});
					(_node.inLinks || []).forEach(function(link) {
						if (link.source.visible) {
							link.visible = true
						}
					});
					(_node.outLinks || []).forEach(function(link) {
						if (link.target.visible) {
							link.visible = true
						}
					})
				}
			}
		});
		node.mouseup(function(evt) {
			self.currentNode = this;
			this.fixed = true;
			this.isDragging = false;
			this.dx = this.cx;
			this.dy = this.cy;
			if (self.highLightNeiber) {
				self.nodes.forEach(function(n) {
					n.alpha = n.t_alpha || n.alpha
				});
				if (self.showLinkFlag) {
					self.links.forEach(function(link) {
						if (link.source.visible && link.target.visible) {
							link.visible = true
						}
					})
				}
			}
			if (evt.button == 2) {
				self.showNodeRightMenu(evt, this)
			}
		});
		return node
	};
	VisualGraph.prototype.lockNode = function(node) {
		if (node && node != null) {
			node.fixed = true;
			node.dragable = false
		}
	};
	VisualGraph.prototype.unLockNode = function(node) {
		if (node && node != null) {
			node.fixed = false;
			node.dragable = true
		}
	};
	VisualGraph.prototype.showNodeRightMenu = function(event, _node) {
		var self = this;
		if (self.config.hasOwnProperty('rightMenu')) {
			if (self.config['rightMenu'].hasOwnProperty('nodeMenu')) {
				self.config['rightMenu']['nodeMenu'].show(event, self, _node)
			}
		}
	};
	VisualGraph.prototype.showLinkRightMenu = function(event, link) {
		var self = this;
		if (self.config.hasOwnProperty('rightMenu')) {
			if (self.config['rightMenu'].hasOwnProperty('linkMenu')) {
				self.config['rightMenu']['linkMenu'].show(event, self, link)
			}
		}
	};
	VisualGraph.prototype.showClusterRightMenu = function(event, box) {
		var self = this;
		if (self.config.hasOwnProperty('rightMenu')) {
			if (self.config['rightMenu'].hasOwnProperty('clusterMenu')) {
				self.config['rightMenu']['clusterMenu'].show(event, self, box)
			}
		}
	};
	VisualGraph.prototype.setTypeMapWithNode = function(node) {
		var self = this;
		this.typeMapStyle[node.type + ''] = {
			'color': self.colorHex(node.fillColor)
		};
		this.typeMapStyle[node.type + '']['shape'] = node.shape || 'circle'
	};
	VisualGraph.prototype.setLineTypeMap = function(link) {
		var self = this;
		var type = link.type || link.label || 'default';
		this.lineTypeMapStyle[type] = {
			'color': self.colorHex(link.strokeColor)
		};
		this.lineTypeMapStyle[type]['lineType'] = link.lineType || 'direct'
	};
	VisualGraph.prototype.colorHex = function(hexColor) {
		var ctool = new this.ColorUtils();
		return ctool.colorHex(hexColor) || '0,0,250'
	};
	VisualGraph.prototype.newEdge = function(source, target) {//todo 建立新边
		var self = this;
		var link = new DGraph.Edge(source, target, null);
		link.lineWidth = 1;
		link.alpha = 0.8;
		link.showArrow = true;
		link.lineType = 'direct';
		link.strokeColor = self.linkColorConfig.color || '120,120,120';
		link.mouseup(function(evt) {
			self.currentLink = this;
			if (evt.button == 2) {
				self.showLinkRightMenu(evt, this)
			}
		});
		return link
	};
	VisualGraph.prototype.addNode = function(_node) {
		var self = this;
		var node = self.newNode(_node);
		node.text = node.label;
		node.showlabel = true;
		self.scene.add(node);
		self.nodes.push(node);
		return node
	};
	VisualGraph.prototype.addEdge = function(_link) {
		var self = this;
		var source = _link.source;
		var target = _link.target;
		var sourceNode = this.nodes.filter(function(n) {
			return n.id == source
		})[0];
		var targetNode = this.nodes.filter(function(n) {
			return n.id == target
		})[0];
		var link = null;
		if (sourceNode && targetNode) {
			link = self.newEdge(sourceNode, targetNode);
			link.label = _link.label || '';
			link.showlabel = true;
			link.lineWidth = Number(_link.lineWidth) || 3;
			link.weight = Number(_link.weight) || 1;
			link.lineType = _link.lineType || 'direct';
			link.properties = _link.properties || {};
			link.font = _link.font || '8px yahei';
			link.fontColor = _link.fontColor || '60,60,60';
			self.scene.add(link);
			self.links.push(link)
		}
		return link
	};
	VisualGraph.prototype.getGraphData = function() {
		var self = this;
		return {
			'nodes': self.nodes,
			'links': self.links
		}
	};
	VisualGraph.prototype.getVisibleData = function() {
		var self = this;
		var visibleNodes = self.nodes.filter(function(n) {
			return n.visible == true
		});
		var visibleLinks = self.links.filter(function(l) {
			var source = l.source,
				target = l.target;
			return source.visible == true && target.visible == true
		});
		visibleNodes.map(function(n) {
			n.fixed = false
		});
		return {
			nodes: visibleNodes,
			links: visibleLinks
		}
	};
	VisualGraph.prototype.setZoom = function(type) {
		var self = this;
		if (type == 'zoomOut') {
			this.stage.zoomOut()
		} else if (type == 'zoomIn') {
			this.stage.zoomIn()
		} else if (type == 'zoom1') {
			this.scene.scaleX = 1;
			this.scene.scaleY = 1
		} else {
			this.stage.centerAndZoom(1.0, 1.0)
		}
	};
	VisualGraph.prototype.moveCenter = function() {
		this.scene.scaleX = 1;
		this.scene.scaleY = 1;
		this.scene.translateToCenter()
	};
	VisualGraph.prototype.setLineType = function(type) {
		this.links.forEach(function(link) {
			link.lineType = type
		})
	};
	VisualGraph.prototype.setNodeShape = function(type) {
		this.nodes.forEach(function(node) {
			node.shape = type
		})
	};
	VisualGraph.prototype.showNodeLabel = function(flag) {
		this.nodes.forEach(function(node) {
			node.showlabel = flag;
			if (flag) {
				node.text = node.label
			} else {
				node.text = null
			}
		})
	};
	VisualGraph.prototype.showLinkLabel = function(flag) {
		this.links.forEach(function(link) {
			link.showlabel = flag;
			if (flag) {
				link.text = link.label;
				link.font = "15px yahei";
				link.fontColor = link.strokeColor
			} else {
				link.text = null
			}
		})
	};
	VisualGraph.prototype.setMouseModel = function(model) {
		if (model == 'drag') {
			this.stage.mode = 'drag'
		} else if (model == 'select') {
			this.stage.mode = 'select'
		} else {
			this.stage.mode = 'normal'
		}
	};

//todo	这里是收缩子节点函数contract,循环递归调用还是有些许问题
	//fixme 注释代码之路开始了
	VisualGraph.prototype.contract = function(curNode) {
		var _self = this;
		if (curNode) {
			var hehe=curNode
			var leafNodes = [];   //用于存储leafNode,其实就是存储子节点，从而好为下一步隐藏做铺垫
			// for(let i in curNode.outLinks){
			// 	leafNodes.push(i.target);
			//
			// }
			// var node2=curNode
			// var allChildNodes = function(node2){
			// 		// 1.创建全部节点的数组
			// 		var allCN = [];
			// 		// 2.递归获取全部节点
			//
			// 		getAllChildNodes(node2.source, allCN);
			// 		// 3.返回全部节点的数组
			// 		return allCN;
			// 	}



			(curNode.outLinks || []).forEach(function(l) {
			// 	// (l.target.outLinks || []).forEach(function(k){
            //     // log.console(k.elementType)
			// 	// });
			//
				if ((l.target.outLinks || []).length == 0 && (l.target.inLinks || []).length == 1) { //l的属性是link，根据link找节点
					// if ((l.target.outLinks || []).length == 0 && (l.target.inLinks || []).length == 1) {
					leafNodes.push(l.target);  //把l.target 节点放进leafNodes
					l.visible = false   // 把link的属性可见设为false
				}
				// if ((l.target.outLinks || []).length != 0 && (l.target.inLinks || []).length == 1) { //l的属性是link，根据link找节点
				// 	// if ((l.target.outLinks || []).length == 0 && (l.target.inLinks || []).length == 1) {
				// 	leafNodes.push(l.target);  //把l.target 节点放进leafNodes
				// 	l.visible = false   // 把link的属性可见设为false
				// }
				// leafNodes.push(l.target);  //把l.target 节点放进leafNodes
				// curNode=l.target
				//
				// l.visible = false   // 把link的属性可见设为false
			});

			hehe.tipText = leafNodes.length;  //说明节点有几个
			leafNodes.forEach(function(n) {
				n.x = hehe.x;     //把父节点的x，y值赋值给子节点
				n.y = hehe.y;
				n.visible = false   //把节点也不可见 ，上面已经把link不可见了
			})
		}
	};


	VisualGraph.prototype.expanded = function(curNode) {
		var _self = this;
		if (curNode) {
			var targetNodes = [];
			(curNode.outLinks || []).forEach(function(l) {
				var target = l.target;
				if ((target.outLinks || []).length == 0 && target.visible == false) {
					l.visible = true;
					target.visible = true;
					targetNodes.push(target)
				}
				//逻辑的考虑，父亲节点如果不显示，则儿子也不显示
			});
			if (targetNodes.length == 0) {
				return
			}
			_self.initLayoutParams(targetNodes, []);
			_self.runLayoutEngin();
			curNode.tipText = null
		}
	};
	VisualGraph.prototype.setBackGroundType = function(type) {
		this.backGroundType = type || 'jpeg'
	};
	VisualGraph.prototype.saveImage = function(width, height) {
		this.stage.saveAsLocalImage(width, height, this.backGroundType)
	};
	VisualGraph.prototype.exportJsonFile = function() {
		var jsonStr = JSON.stringify(this.serialized());
		funDownload(jsonStr, 'graphvis.json');

		function funDownload(content, filename) {
			var eleLink = document.createElement('a');
			eleLink.download = filename;
			eleLink.style.display = 'none';
			var blob = new Blob([content]);
			eleLink.href = URL.createObjectURL(blob);
			document.body.appendChild(eleLink);
			eleLink.click();
			document.body.removeChild(eleLink)
		}
	};
	VisualGraph.prototype.showOverView = function(flag) {
		this.stage.eagleEye.visible = flag
	};
	VisualGraph.prototype.switchOverView = function() {
		this.stage.eagleEye.visible = !this.stage.eagleEye.visible
	};
	VisualGraph.prototype.findNode = function(text) {
		var nodes = this.nodes.filter(function(n) {
			if (n.label == null) return false;
			var label = n.label + '';
			return label == text
		});
		if (nodes.length > 0) {
			var node = nodes[0];
			node.selected = true;
			node.showlabel = true;
			this.currentNode = node;
			this.scene.zFocusEle(node);
			return node
		}
		return null
	};
	DGraph.Scene.prototype.zFocusEle = function(ele, params, callback) {
		ele.selected = true;
		if (!params) {
			params = {}
		}
		if (!params.x && params.x != 0) {
			params.x = this.stage.canvas.width / 2
		}
		if (!params.y && params.y != 0) {
			params.y = this.stage.canvas.height / 2
		}
		if (typeof($) != 'undefined') {
			$(this).animate({
				translateX: -ele.x + params.x,
				translateY: -ele.y + params.y
			}, params.speed, callback)
		} else {
			this.translateX = -ele.x + params.x;
			this.translateY = -ele.y + params.y
		}
	};
	VisualGraph.prototype.converHexToRGB = function(hex) {
		var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
		hex = hex.replace(shorthandRegex, function(m, r, g, b) {
			return r + r + g + g + b + b
		});
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		if (result) {
			return parseInt(result[1], 16) + ',' + parseInt(result[2], 16) + ',' + parseInt(result[3], 16)
		}
		return null
	};
	VisualGraph.prototype.setLabelColor = function(hexColor) {
		var rgbColor = this.converHexToRGB(hexColor);
		this.defaultLabelColor = rgbColor;
		this.nodes.forEach(function(node) {
			node.fontColor = rgbColor
		})
	};
	VisualGraph.prototype.hideAllLink = function() {
		this.showLinkFlag = false;
		this.links.forEach(function(link) {
			link.visible = false
		})
	};
	VisualGraph.prototype.showAllLink = function() {
		this.showLinkFlag = true;
		this.links.forEach(function(link) {
			if (link.source.visible && link.target.visible) {
				link.visible = true
			}
		})
	};
	VisualGraph.prototype.showAllNode = function() {
		this.nodes.forEach(function(node) {
			node.alpha = 1;
			node.visible = true
		})
	};
	VisualGraph.prototype.setNodeFont = function(fontSize) {
		var self = this;
		self.nodes.forEach(function(n) {
			n.font = fontSize + 'px yahei'
		})
	};
	VisualGraph.prototype.setTextPosition = function(textAlign) {
		var self = this;
		self.nodes.forEach(function(n) {
			n.textPosition = textAlign
		})
	};
	VisualGraph.prototype.setLinkAlpha = function(alpha) {
		this.links.forEach(function(links) {
			links.alpha = alpha
		})
	};
	VisualGraph.prototype.setLinkArrowShow = function(flag) {
		this.links.forEach(function(l) {
			l.showArrow = flag
		})
	};
	VisualGraph.prototype.setLinkColor = function(hexColor) {
		var rgbColor = this.converHexToRGB(hexColor);
		this.linkColorConfig = {
			linkColorType: 2,
			color: rgbColor
		};
		this.links.forEach(function(link) {
			link.colorType = 'd';
			link.strokeColor = rgbColor
		})
	};
	VisualGraph.prototype.setLinkColorType = function(type) {
		this.linkColorConfig.linkColorType = type;
		var linkColorType = null;
		if (this.linkColorConfig.linkColorType == 0) {
			linkColorType = 's'
		} else if (this.linkColorConfig.linkColorType == 1) {
			linkColorType = 't'
		} else if (this.linkColorConfig.linkColorType == 3) {
			linkColorType = 'both'
		} else {
			linkColorType = 'd'
		}
		var dcolor = this.linkColorConfig.color;
		this.links.forEach(function(l) {
			l.colorType = linkColorType;
			if (linkColorType == 'd') {
				l.strokeColor = dcolor
			}
		})
	};
	VisualGraph.prototype.setLinkFont = function(fontSize) {
		var self = this;
		self.links.forEach(function(l) {
			l.font = fontSize + 'px yahei';
			l.textOffsetX = -Number(fontSize)
		})
	};
	VisualGraph.prototype.setLinkLabelColor = function(hexColor) {
		var self = this;
		var rgbColor = this.converHexToRGB(hexColor);
		self.links.forEach(function(l) {
			l.fontColor = rgbColor
		})
	};
	VisualGraph.prototype.findNode = function(text, showNodeInfoFlag) {
		var nodes = this.nodes.filter(function(n) {
			if (n.label == null) return false;
			var label = n.label + '';
			return label == text
		});
		if (nodes.length > 0) {
			var node = nodes[0];
			node.selected = true;
			this.currentNode = node;
			this.scene.zFocusEle(node);
			node.text = node.label;
			return node
		}
	};
	VisualGraph.prototype.resetNodeInfo = function(nodeInfo) {
		var node = this.currentNode;
		if (node) {
			node.label = this.currentNode.text = nodeInfo.name;
			node.radius = Number(nodeInfo.radius) || 20;
			node.scaleX = node.scaleY = Number(nodeInfo.scale) || 1;
			node.fillColor = this.converHexToRGB(nodeInfo.fillColor);
			node.shape = nodeInfo.shape;
			node.showlabel = nodeInfo.showlabel == 'true' ? true : false;
			node.imageUrl = nodeInfo.image;
			node.setImage(nodeInfo.image)
		}
	};
	VisualGraph.prototype.resetEdgeStyle = function(lineInfo) {
		var self = this;
		var line = self.currentLink;
		if (line) {
			line.label = lineInfo['label'];
			line.text = line.label;
			line.type = line.label;
			line.lineWidth = lineInfo['lineWidth'];
			line.lineType = lineInfo['lineType'];
			if (lineInfo['lineDash']) {
				line.lineDash = lineInfo['lineDash'].split(',')
			}
			var color = lineInfo['edgeColor'];
			if (color && color.length > 0 && color != '#1f6ce9') {
				line.strokeColor = self.converHexToRGB(color);
				line.fontColor = line.strokeColor;
				line.colorType = null
			}
			line.showlabel = true
		}
	};
	VisualGraph.prototype.addClusterContainer = function(clusters, avoidOverlap) {
		var self = this;
		if (clusters == null) {
			return
		}
		if (avoidOverlap == undefined || avoidOverlap == null) {
			avoidOverlap = false
		}
		self.clusterBoxes.forEach(function(box) {
			self.scene.remove(box)
		});
		self.clusterBoxes = [];
		for (var clusterKey in clusters) {
			var cluster = clusters[clusterKey];
			var clusterNodes = self.nodes.filter(function(node) {
				return node.cluster == clusterKey
			});
			var size = cluster.size,
				rate = cluster.rate,
				color = cluster.color;
			if (clusterNodes.length > 1) {
				var box = new DGraph.Box();
				box.borderRadius = 0;
				box.fillColor = color;
				box.alpha = 0.1;
				box.dbclick(function(evt) {
					var random = Math.round(Math.random() * 3);
					if (random == 1) {
						this.layout = new DGraph.layout.GridLayout
					} else if (random == 2) {
						this.layout = new DGraph.layout.CircleLayout
					} else {
						this.layout = new DGraph.layout.AutoBoxLayout
					}
				});
				box.mouseup(function(evt) {
					if (evt.button == 2) {
						self.currentCluster = this;
						self.showClusterRightMenu(evt, this)
					}
				});
				self.scene.add(box);
				self.clusterBoxes.push(box);
				clusterNodes.forEach(function(node) {
					box.add(node)
				})
			}
		}
		if (!avoidOverlap) {
			self.clusterAvoidOverlap(self.clusterBoxes)
		}
	};
	VisualGraph.prototype.removeCluster = function() {
		var self = this;
		self.clusterBoxes = self.clusterBoxes.filter(function(clusterBox) {
			return clusterBox != self.currentCluster
		});
		self.scene.remove(self.currentCluster)
	};
	VisualGraph.prototype.clearClusters = function() {
		var self = this;
		self.clusterBoxes.forEach(function(clusterBox) {
			self.scene.remove(clusterBox)
		});
		self.clusterBoxes = []
	};
	VisualGraph.prototype.setClusterLayout = function(layoutType) {
		var self = this;
		if (self.currentCluster == null || layoutType == null) {
			return
		}
		if (layoutType == 'grid') {
			self.currentCluster.layout = new DGraph.layout.GridLayout
		} else if (layoutType == 'circle') {
			self.currentCluster.layout = new DGraph.layout.CircleLayout
		} else {
			self.currentCluster.layout = new DGraph.layout.AutoBoxLayout
		}
	};
	VisualGraph.prototype.clusterAvoidOverlap = function(clusterBoxes) {
		var self = this;
		var virtualNodes = [];
		clusterBoxes.forEach(function(box, i) {
			box.layout(box, box.childs);
			var boxRadius = Math.sqrt((box.width / 2) * (box.width / 2) + (box.height / 2) * (box.height / 2));
			var tempNode = new DGraph.Node();
			tempNode.radius = boxRadius;
			tempNode.x = box.cx;
			tempNode.y = box.cy;
			virtualNodes[i] = tempNode
		});
		if (typeof(LayoutFactory) != 'undefined') {
			var layout = new LayoutFactory({
				nodes: virtualNodes,
				links: null
			}, {
				'apikey': self.apikey
			}).createLayout('noverlap');
			if (layout != null) {
				layout.initAlgo();
				layout.resetConfig({
					'maxMove': 1
				});
				var times = 0,
					runFlag = true;
				while (times++ < 300 && runFlag) {
					layout.runLayout();
					runFlag = layout.runFlag
				}
			}
		}
		virtualNodes.forEach(function(node, i) {
			var box = clusterBoxes[i];
			var dx = node.x - box.cx,
				dy = node.y - box.cy;
			box.childs.forEach(function(childNode) {
				childNode.x += dx;
				childNode.y += dy
			})
		})
	};
	VisualGraph.prototype.applyNodeSize = function(range) {
		var self = this;
		var minDegree = 0;
		var maxDegree = 0;
		self.nodes.forEach(function(n) {
			var degree = (n.outLinks || []).length + (n.inLinks || []).length;
			n.degree = degree;
			minDegree = Math.min(degree, minDegree);
			maxDegree = Math.max(degree, maxDegree)
		});
		var degreesDomain = [Math.sqrt(minDegree), Math.sqrt(maxDegree)];
		self.nodes.forEach(function(n) {
			var scale = self.numScale(range, degreesDomain, Math.sqrt(n.degree));
			n.scaleX = scale;
			n.scaleY = scale
		})
	};
	VisualGraph.prototype.applyLinkWeight = function(range) {
		var self = this;
		var minWeight = 3;
		var maxWeight = 8;
		self.links.forEach(function(l) {
			minWeight = Math.min(l.weight, minWeight);
			maxWeight = Math.max(l.weight, maxWeight)
		});
		var weightDomain = [Math.sqrt(minWeight), Math.sqrt(maxWeight)];
		self.links.forEach(function(l) {
			var lineWidth = self.numScale(range, weightDomain, Math.sqrt(l.weight));
			l.lineWidth = Math.round(lineWidth)
		})
	};
	VisualGraph.prototype.numScale = function(range, domain, num) {
		return ((num - domain[0]) * (range[1] - range[0]) / (domain[1] - domain[0]) + range[0]).toFixed(1)
	};
	//
	VisualGraph.prototype.selectAll = function() {
		var _self = this;
		this.nodes.forEach(function(n) {
			n.selected = true;
			_self.scene.addToSelected(n)
		})
	};
	//TODO 在这里是反选，把selected转回来，继续用selected的方法
	VisualGraph.prototype.reverseSelect = function() {
		var _self = this;
		this.nodes.forEach(function(n) {
			if (n.selected) {
				n.selected = false;
				_self.scene.removeFromSelected(n)
			} else {
				n.selected = true;
				_self.scene.addToSelected(n)
			}
		})
	};
	//todo 在这里是选中关联节点
	VisualGraph.prototype.selectRelate = function() {
		var self = this;
		if (self.currentNode == null) {
			return false
		}
		var inLinks = self.currentNode.inLinks || []; //在这里把相关联的上级节点，选中
		var outLinks = self.currentNode.outLinks || [];//在这里把相关联的下级节点，选中
		inLinks.forEach(function(link) {
			link.source.selected = true;   //在这里把父亲节点的selected安排一下
			self.scene.addToSelected(link.source)
		});
		outLinks.forEach(function(link) {
			link.target.selected = true;
			self.scene.addToSelected(link.target)
		})
	};
	//todo 显示选中功能的实现函数
	VisualGraph.prototype.showSelected = function() {
		this.nodes.forEach(function(n) { //这个this.nodes包含了图中所有节点，也就是相当于对节点进行遍历
			if (!n.selected) {//如果节点没有被选中，则n.selected为false,则！n.selected为true，进入该循环。
				n.visible = false;  //把节点不可见
				var inLinks = n.inLinks || [],
					outLinks = n.outLinks || [];
				inLinks.forEach(function(l) {   //把进边不可见
					l.visible = false
				});
				outLinks.forEach(function(l) {   //把出边不可见，则全部不可见
					l.visible = false
				})
			}
		})
	};
	//todo 隐藏选中功能只需要把！去掉即可
	VisualGraph.prototype.hideSelected = function() {
		this.nodes.forEach(function(n) {
			if (n.selected) {
				n.visible = false;
				var inLinks = n.inLinks || [],
					outLinks = n.outLinks || [];
				inLinks.forEach(function(l) {
					l.visible = false
				});
				outLinks.forEach(function(l) {
					l.visible = false
				})
			}
		})
	};
	VisualGraph.prototype.hideIsolatedNodes = function() {
		this.nodes.forEach(function(n) {
			if ((n.inLinks || []).length == 0 && (n.outLinks || []).length == 0) {
				n.visible = false
			}
		})
	};

	//todo 展示所有节点的操作
	VisualGraph.prototype.showNodes = function() {
		this.nodes.forEach(function(n) {
			n.visible = true;
			n.alpha = 1
		})
	};

	//todo 删除节点的操作
	VisualGraph.prototype.deleteNode = function(node) {
		var _self = this;
		if (node) {
			var links = [];
			var index = _self.nodes.indexOf(node); //JavaScript Array indexOf() 方法 找到的话，输出node在nodes中位置，找不到输出-1
			if (index > -1) {
				(node.inLinks || []).forEach(function(l) {
					links.push(l)
				});
				(node.outLinks || []).forEach(function(l) {
					links.push(l)
				});
				_self.nodes.splice(index, 1);  //splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。 arrayObject.splice(index,howmany,item1,.....,itemX)
				//index 	必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
				// howmany 	必需。要删除的项目数量。如果设置为 0，则不会删除项目。
				// item1, ..., itemX 	可选。向数组添加的新项目。
				_self.scene.remove(node)
			}
			links.forEach(function(l) {   //删除link的函数，上面是先删除了节点，这里删除边
				index = _self.links.indexOf(l);
				if (index > -1) {
					_self.links.splice(index, 1);
					_self.scene.remove(l)
				}
			});
			node = null
		}
	};
	//todo 删除边的操作
	VisualGraph.prototype.deleteLink = function(link) {
		var _self = this;
		if (link) {
			var index = _self.links.indexOf(link);
			if (index > -1) {
				_self.links.splice(index, 1);
				_self.scene.remove(link)
			}
		}
	};

	VisualGraph.prototype.setNodeLabelWithDegree = function(degree) {
		this.nodes.forEach(function(n) {
			if (((n.inLinks || []).length + (n.outLinks || []).length) >= degree) {
				n.showlabel = true
			} else {
				n.showlabel = false;
				n.text = null
			}
		})
	};
	VisualGraph.prototype.translateOrZoom = function(type) {
		var self = this;
		if (type === 'zoomOut') {
			scaleGraph(1.2)
		} else if (type === 'zoomIn') {
			scaleGraph(0.8)
		} else {
			this.stage.centerAndZoom(1.0, 1.0)
		}
		function scaleGraph(scale) {
			var nodeCount = self.nodes.length;
			var xMean = 0,
				yMean = 0;
			self.nodes.forEach(function(n) {
				xMean += n.x;
				yMean += n.y
			});
			xMean /= nodeCount;
			yMean /= nodeCount;
			self.nodes.forEach(function(n) {
				var dx = (n.x - xMean) * scale;
				var dy = (n.y - yMean) * scale;
				if (typeof($) != 'undefined') {
					$(n).animate({
						x: xMean + dx,
						y: yMean + dy
					}, 500)
				} else {
					n.x = xMean + dx;
					n.y = yMean + dy
				}
			})
		}
	};
	VisualGraph.prototype.rotateGraph = function(angle) {
		var self = this;
		var sin = Math.sin(-angle * Math.PI / 180);
		var cos = Math.cos(-angle * Math.PI / 180);
		var bounds = this.stage.getBound();
		var px = Math.round(bounds.width / 2);
		var py = Math.round(bounds.height / 2);
		this.nodes.forEach(function(n) {
			var dx = n.x - px;
			var dy = n.y - py;
			if (typeof($) != 'undefined') {
				$(n).animate({
					x: (px + dx * cos - dy * sin),
					y: (py + dy * cos + dx * sin)
				}, 500)
			} else {
				n.x = (px + dx * cos - dy * sin);
				n.y = (py + dy * cos + dx * sin)
			}
		})
	};
	VisualGraph.prototype.getGraphStatistic = function() { //todo 获取图谱静态数据
		var self = this;
		if (self.nodes.length == 0) {
			return null
		}
		var density = self.calculateDensity(); //计算图密度
		var avgDegree = self.calculateAvgDegree(); //计算图平均度
		var avgWeightDegree = self.calculateAvgWieghtDegree();//计算图平均加权度
		var avgInDegree=self.calculateInAvgDegree();//计算图平均入度
		var avgOutDegree=self.calculateOutAvgDegree();//计算图平均出度
		return {
			'nodesCount': self.nodes.length,
			'linksCount': self.links.length,
			'density': density.toFixed(6),
			'avgDegree': avgDegree.toFixed(6),
			'avgInDegree': avgInDegree.toFixed(6),
			'avgOutDegree': avgOutDegree.toFixed(6),
			'avgWeightDegree': avgWeightDegree.toFixed(6)
		}
	};
	VisualGraph.prototype.calculateDensity = function() { //todo 获取图密度
		var self = this;
		var nodesCount = self.nodes.length,
			linksCount = self.links.length;
		var multiplier = 1;
		if (!self.isDerictedGraph) {
			multiplier = 2
		}
		var density = (multiplier * linksCount) / (nodesCount * nodesCount - nodesCount);
		return density
	};
	VisualGraph.prototype.calculateAvgDegree = function() { //todo 获取图平均度
		var self = this;
		var nodesCount = self.nodes.length,
			averageDegree = 0;
		self.nodes.forEach(function(n) {
			averageDegree += ((n.inLinks || []).length + (n.outLinks || []).length)
		});
		var multiplier = 1;
		// if (self.isDerictedGraph) {
		// 	multiplier = 2
		// }
		var avgDegree = (averageDegree /= (multiplier * nodesCount));
		return avgDegree
	};
	//todo 获取图平均入度
	VisualGraph.prototype.calculateInAvgDegree = function() { //todo 获取图平均入度
		var self = this;
		var nodesCount = self.nodes.length,
			averageDegree = 0;
		self.nodes.forEach(function(n) {
			averageDegree += ((n.inLinks || []).length)
		});
		var multiplier = 1;
		// if (self.isDerictedGraph) {
		// 	multiplier = 2
		// }
		var avgInDegree = (averageDegree /= (multiplier * nodesCount));
		return avgInDegree
	};

	//todo 获取图平均出度
	VisualGraph.prototype.calculateOutAvgDegree = function() { //todo 获取图平均出度
		var self = this;
		var nodesCount = self.nodes.length,
			averageDegree = 0;
		self.nodes.forEach(function(n) {
			averageDegree += ((n.outLinks || []).length)
		});
		var multiplier = 1;
		// if (self.isDerictedGraph) {
		// 	multiplier = 2
		// }
		var avgOutDegree = (averageDegree /= (multiplier * nodesCount));
		return avgOutDegree
	};


	VisualGraph.prototype.calculateAvgWieghtDegree = function() { //todo 获取图平均加权度
		var self = this;
		var nodesCount = self.nodes.length,
			averageWeightDegree = 0;
		self.nodes.forEach(function(n) {
			if (self.isDerictedGraph) {
				(n.inLinks || []).forEach(function(l) {
					averageWeightDegree += l.weight
				});
				(n.outLinks || []).forEach(function(l) {
					averageWeightDegree += l.weight
				})
			} else {
				var allLinks = [];
				allLinks.push((n.inLinks || []));
				allLinks.push((n.outLinks || []));
				allLinks.forEach(function(l) {
					var multi = 1;
					if (l.source == l.target) {
						multi = 2
					}
					averageWeightDegree += (multi * l.weight)
				})
			}
		});
		var multiplier = 1;
		// if (self.isDerictedGraph) {
		// 	multiplier = 2
		// }
		var avgDegree = (averageWeightDegree /= (multiplier * nodesCount));
		return avgDegree
	};
	VisualGraph.prototype.serialized = function() {
		var self = this;
		var _graph = {
			nodes: [],
			links: []
		};
		self.nodes.forEach(function(n) {
			_graph.nodes.push({
				'id': n.id,
				'label': n.label,
				'type': n.type,
				'x': Math.round(n.x),
				'y': Math.round(n.y),
				'size': n.radius,
				'scale': n.scaleX,
				'color': n.fillColor
			})
		});
		self.links.forEach(function(l) {
			_graph.links.push({
				'source': l.source.id,
				'target': l.target.id,
				'weight': l.weight,
				'label': l.label || l.type || ''
			})
		});
		return _graph
	};
	VisualGraph.prototype.nodeWrapText = function(flag) {
		this.nodes.forEach(function(node) {
			node.wrapText = flag
		})
	};
	VisualGraph.prototype.nodeMapAlphaByDegree = function() {
		var self = this;
		var minDegree = 0,
			maxDegree = 0;
		self.nodes.forEach(function(n) {
			n.outdegree = (n.outLinks || []).reduce(function(total, _link) {
				return total + (_link.weight || 1)
			}, 0);
			n.indegree = (n.inLinks || []).reduce(function(total, _link) {
				return total + (_link.weight || 1)
			}, 0);
			n.degree = n.outdegree + n.indegree;
			minDegree = Math.min(n.degree, minDegree);
			maxDegree = Math.max(n.degree, maxDegree)
		});
		var degreesDomain = [minDegree, maxDegree];
		var range = [0.2, 1];
		self.nodes.forEach(function(n) {
			var _alpha = self.numScale(range, degreesDomain, n.degree);
			n.alpha = _alpha;
			(n.outLinks || []).forEach(function(l) {
				l.alpha = _alpha
			})
		})
	};
	VisualGraph.prototype.nodeMapSizeByDegree = function(propType, range) {
		var self = this;
		var minDegree = 0,
			maxDegree = 0;
		var degreeArr = {};
		self.nodes.forEach(function(n) {
			n.outdegree = (n.outLinks || []).reduce(function(total, _link) {
				return total + (_link.weight || 1)
			}, 0);
			n.indegree = (n.inLinks || []).reduce(function(total, _link) {
				return total + (_link.weight || 1)
			}, 0);
			n.degree = n.outdegree + n.indegree;
			if (propType == 'degree') {
				minDegree = Math.min(n.degree, minDegree);
				maxDegree = Math.max(n.degree, maxDegree)
			} else if (propType == 'outdegree') {
				minDegree = Math.min(n.outdegree, minDegree);
				maxDegree = Math.max(n.outdegree, maxDegree)
			} else {
				minDegree = Math.min(n.indegree, minDegree);
				maxDegree = Math.max(n.indegree, maxDegree)
			}
		});
		var degreesDomain = [minDegree, maxDegree];
		self.nodes.forEach(function(n) {
			var nodeSize = 1;
			if (propType == 'degree') {
				nodeSize = self.numScale(range, degreesDomain, n.degree)
			} else if (propType == 'outdegree') {
				nodeSize = self.numScale(range, degreesDomain, n.outdegree)
			} else {
				nodeSize = self.numScale(range, degreesDomain, n.indegree)
			}
			n.width = n.radius = Math.round(nodeSize)
		})
	};
	VisualGraph.prototype.findShortPath = function(sourceValue, targetValue) {
		var self = this;
		if (sourceValue.length == 0 || targetValue.length == 0) {
			return
		}
		var startN = self.nodes.filter(function(n) {
			return (n.label + '') == sourceValue
		})[0];
		var endN = self.nodes.filter(function(n) {
			return (n.label + '') == targetValue
		})[0];
		self.allShortPath(0, startN, endN)
	};
	VisualGraph.prototype.allShortPath = function(direction, startN, endN) {
		var _self = this;
		var nodeList = [];
		var linkList = [];
		var level = 0,
			levelS = 0,
			levelE = 0;
		var noPath = true,
			noPathS = true,
			noPathE = true;
		if (direction == 0) {
			if (!getShortPath(startN, endN, false)) {
				levelS = level;
				level = 0;
				noPathS = noPath;
				noPath = true
			}
			if (!getShortPath(endN, startN, false)) {
				levelE = level;
				level = 0;
				noPathE = noPath;
				noPath = true
			}
			if (noPathS && noPathE) {} else if (noPathS && !noPathE) {
				getShortPath(endN, startN, true)
			} else if (!noPathS && noPathE) {
				getShortPath(startN, endN, true)
			} else {
				if (levelS <= levelE) {
					getShortPath(startN, endN, true)
				} else {
					getShortPath(endN, startN, true)
				}
			}
		} else if (direction == 1) {
			if (getShortPath(startN, endN, true)) {}
		} else if (direction == 2) {
			if (getShortPath(endN, startN, true)) {}
		}
		function getShortPath(startNode, endNode, flag) {
			var middleNodes = {};
			var middleLinks = {};
			var hasPassedNodes = [];
			if (startNode.outLinks == undefined || startNode.outLinks == null || startNode.outLinks.length == 0 || endNode.inLinks == undefined || endNode.inLinks == null || endNode.inLinks.length == 0) {
				return true
			} else {
				nodeList.push(startNode);
				_self.scene.addToSelected(startNode);
				hasPassedNodes.push(startNode);
				if (middleNodes[level] == undefined) {
					middleNodes[level] = []
				}
				if (middleLinks[level] == undefined) {
					middleLinks[level] = []
				}
				middleNodes[level].push(startNode);
				middleLinks[level].push(undefined);
				do {
					level++;
					getNextLevel(level)
				} while (middleNodes[level] != undefined && middleNodes[level].length != undefined && middleNodes[level].length > 0);
				if (flag && !noPath && level > 1) {
					for (var i = level - 1; i >= 1; i--) {
						middleLinks[i].forEach(function(l) {
							if (l.target.selected == true) {
								l.source.selected = true;
								l.selected = true;
								_self.scene.addToSelected(l.target);
								nodeList.push(l.target);
								linkList.push(l)
							}
						})
					}
				}
				return noPath
			}
			function getNextLevel(_level) {
				if (middleNodes[_level - 1] != undefined && middleNodes[_level - 1].length != undefined && middleNodes[_level - 1].length > 0) {
					middleNodes[_level - 1].forEach(function(n) {
						if (!noPath) {
							return
						}
						n.outLinks.forEach(function(l) {
							if (!noPath) {
								return
							} else if (l.target.id == endNode.id) {
								if (flag) {
									l.target.selected = true;
									l.source.selected = true;
									l.selected = true;
									_self.scene.addToSelected(l.target);
									nodeList.push(l.target);
									linkList.push(l)
								}
								noPath = false;
								middleNodes[_level] = undefined;
								return
							} else if (hasPassedNodes.indexOf(l.target) == -1) {
								if (middleNodes[_level] == undefined) {
									middleNodes[_level] = []
								}
								if (middleLinks[_level] == undefined) {
									middleLinks[_level] = []
								}
								middleNodes[_level].push(l.target);
								middleLinks[_level].push(l);
								hasPassedNodes.push(l.target)
							}
						})
					})
				}
			}
		}
	};
	VisualGraph.prototype.pathAnalyze = function(sourceValue, targetValue) {
		var self = this;
		if ((self.nodes || []).length == 0) {
			return
		}
		var startN = self.nodes.filter(function(n) {
			return (n.label + '') == sourceValue
		})[0];
		var endN = self.nodes.filter(function(n) {
			return (n.label + '') == targetValue
		})[0];
		self.allPath(0, startN, endN)
	};
	VisualGraph.prototype.allPath = function(direction, startN, endN) {
		var _self = this;
		var nodeList = [];
		var linkList = [];
		if (direction == 0) {
			var flag1 = getPath(startN, endN);
			var flag2 = getPath(endN, startN);
			if (flag1 && flag2) {}
		} else if (direction == 1) {
			if (getPath(startN, endN)) {}
		} else if (direction == 2) {
			if (getPath(endN, startN)) {}
		}
		function getPath(startNode, endNode) {
			var hasPassedNodes = [];
			var hasSureFlagNodes = [];
			var waitList = {};
			if ((startNode.outLinks || []).length == 0 || (endNode.inLinks || []).length == 0) {
				return true
			} else {
				nodeList.push(startNode);
				_self.scene.addToSelected(startNode);
				hasPassedNodes.push(startNode);
				var noPath = true;
				startNode.outLinks.forEach(function(l) {
					if (hasPassedNodes.indexOf(l.target) == -1) {
						hasPassedNodes.push(l.target);
						var flag = getPathFlag(l.target);
						if (flag != undefined) {
							l.target.selected = flag;
							l.selected = flag;
							if (hasSureFlagNodes.indexOf(l.target) == -1) {
								hasSureFlagNodes.push(l.target);
								changeWaitStatus(l.target)
							}
							if (flag) {
								noPath = false;
								_self.scene.addToSelected(l.target);
								nodeList.push(l.target);
								linkList.push(l)
							}
						} else {
							pushWaitList(l.target, l)
						}
					} else {
						if (hasSureFlagNodes.indexOf(l.target) == -1) {
							pushWaitList(l.target, l)
						} else {
							if (hasSureFlagNodes.indexOf(l.target) != -1) {
								l.selected = l.target.selected;
								if (l.target.selected) {
									noPath = false;
									_self.scene.addToSelected(l.target);
									nodeList.push(l.target);
									linkList.push(l)
								}
							}
						}
					}
				});
				return noPath
			};

			function changeWaitStatus(node) {
				var nodeid = node.id;
				if (waitList[nodeid] != undefined && waitList[nodeid].length > 0) {
					var length = waitList[nodeid].length;
					for (var i = 0; i < length; i++) {
						var _l = waitList[nodeid][i];
						if (!_l.selected) {
							_l.selected = node.selected;
							if (_l.selected) {
								linkList.push(_l)
							}
						}
						if (!_l.source.selected) {
							_l.source.selected = node.selected;
							if (_l.source.selected) {
								_self.scene.addToSelected(_l.source);
								nodeList.push(_l.source)
							}
							if (hasSureFlagNodes.indexOf(_l.source) == -1) {
								hasSureFlagNodes.push(_l.source);
								changeWaitStatus(_l.source)
							}
						}
					}
				}
			};

			function pushWaitList(node, link) {
				if (waitList[node.id] == undefined) {
					waitList[node.id] = []
				}
				if (waitList[node.id].indexOf(link) == -1) {
					waitList[node.id].push(link)
				}
			};

			function getPathFlag(node) {
				if (node.id == endNode.id) {
					return true
				} else if ((node.outLinks || []).length == 0) {
					return false
				} else {
					var outFlag = false;
					node.outLinks.forEach(function(l) {
						if (hasPassedNodes.indexOf(l.target) == -1) {
							hasPassedNodes.push(l.target);
							var flag = getPathFlag(l.target);
							if (flag != undefined) {
								l.target.selected = flag;
								l.selected = flag;
								if (hasSureFlagNodes.indexOf(l.target) == -1) {
									hasSureFlagNodes.push(l.target);
									changeWaitStatus(l.target)
								}
								if (flag) {
									_self.scene.addToSelected(l.target);
									nodeList.push(l.target);
									linkList.push(l);
									outFlag = true
								}
							} else {
								pushWaitList(l.target, l);
								if (!outFlag) {
									outFlag = undefined
								}
							}
						} else {
							if (hasSureFlagNodes.indexOf(l.target) == -1) {
								pushWaitList(l.target, l);
								if (!outFlag) {
									outFlag = undefined
								}
							} else {
								if (hasSureFlagNodes.indexOf(l.target) != -1) {
									l.selected = l.target.selected;
									if (l.target.selected) {
										outFlag = true;
										_self.scene.addToSelected(l.target);
										nodeList.push(l.target);
										linkList.push(l)
									}
								}
							}
						}
					});
					return outFlag
				}
			}
			hasPassedNodes = null;
			hasSureFlagNodes = null;
			waitList = null
		}
	};
	VisualGraph.prototype.findNDegreeRelates = function(degree) {
		var _self = this;
		var nodeList = [];
		this.nodes.forEach(function(n) {
			var total = (n.inLinks || []).length + (n.outLinks || []).length;
			if (total >= degree) {
				n.selected = true;
				_self.scene.addToSelected(n);
				nodeList.push(n)
			}
		})
	};
	VisualGraph.prototype.nLayerRelates = function(nodeLabel, layerNum) { //todo 查找n层关系
		var _self = this;
		var currentNode = _self.nodes.filter(function(n) {     //筛选节点
			return (n.label + '') == nodeLabel
		})[0];
		var middleNode = [];
		var nowOutsideNode = {};
		var nodeList = [];
		if (null != currentNode) {
			currentNode.selected = true;
			_self.scene.addToSelected(currentNode);
			nodeList.push(currentNode);
			recursive(currentNode, layerNum)
		}
		function recursive(node, nLayer) {
			if (nLayer > 1) {
				if (layerNum == nLayer && middleNode.indexOf(node) == -1) {
					middleNode.push(node)
				}
				var level = layerNum - nLayer;
				var inLinks = node.inLinks || [];
				var outLinks = node.outLinks || [];
				inLinks.forEach(function(l) {
					if (middleNode.indexOf(l.source) == -1) {
						middleNode.push(l.source);
						if (nowOutsideNode[level] == undefined) {
							nowOutsideNode[level] = []
						}
						nowOutsideNode[level].push(l.source)
					}
				});
				outLinks.forEach(function(l) {
					if (middleNode.indexOf(l.target) == -1) {
						middleNode.push(l.target);
						if (nowOutsideNode[level] == undefined) {
							nowOutsideNode[level] = []
						}
						nowOutsideNode[level].push(l.target)
					}
				});
				if (nowOutsideNode[level] == undefined) {
					return
				}
				nowOutsideNode[level].forEach(function(l) {
					recursive(l, nLayer - 1)
				})
			} else if (nLayer == 1) {
				var inLinks = node.inLinks || [];
				var outLinks = node.outLinks || [];
				inLinks.forEach(function(l) {
					if (middleNode.indexOf(l.source) == -1) {
						l.source.selected = true;
						_self.scene.addToSelected(l.source);
						nodeList.push(l.source)
					}
				});
				outLinks.forEach(function(l) {
					if (middleNode.indexOf(l.target) == -1) {
						l.target.selected = true;
						_self.scene.addToSelected(l.target);
						nodeList.push(l.target)
					}
				})
			}
		}
	};

	VisualGraph.prototype.getLineTypeMap = function() {
		return this.lineTypeMapStyle
	};
	VisualGraph.prototype.getALLLineTypeCounter = function() {
		var self = this;
		var relationTypeMap = new Map();
		(self.links || []).forEach(function(link) {
			var typeValue = relationTypeMap.get(link.type);
			if (typeValue == null) {
				relationTypeMap.set(link.type, {
					label: link.label,
					num: 1
				})
			} else {
				typeValue.num++
			}
		});
		return relationTypeMap
	};
	VisualGraph.prototype.renderNodeStyle = function(typeMapStyle) {
		var self = this;
		this.typeMapStyle = typeMapStyle;
		this.nodes.forEach(function(n) {
			var nodeType = typeMapStyle[n.type];
			n.fillColor = self.converHexToRGB(nodeType['color']);
			n.shape = nodeType['shape']
		})
	};
	VisualGraph.prototype.removeCurrentLink = function() {
		this.scene.remove(this.currentLink);
		this.currentLink = null
	};
	VisualGraph.prototype.renderLineStyle = function(lineTypeMapStyle) {
		var self = this;
		this.lineTypeMapStyle = lineTypeMapStyle;
		this.links.forEach(function(l) {
			var lineType = lineTypeMapStyle[l.label || 'default'];
			l.colorType = null;
			l.strokeColor = self.converHexToRGB(lineType['color']);
			l.lineType = lineType['lineType']
		})
	};
	VisualGraph.prototype.setNodeLabelWithDegree = function(degree) {
		this.nodes.forEach(function(n) {
			if (((n.inLinks || []).length + (n.outLinks || []).length) >= degree) {
				n.showlabel = true
			} else {
				n.showlabel = false;
				n.text = null
			}
		})
	};
	VisualGraph.prototype.filterNodes = function(type, condition, value) {
		this.nodes.forEach(function(n) {
			var degree = 0;
			if (type == 'degree') {
				degree = (n.inLinks || []).length + (n.outLinks || []).length
			} else if (type == 'outdegree') {
				degree = (n.outLinks || []).length
			} else if (type == 'indegree') {
				degree = (n.inLinks || []).length
			}
			var kk=n.scaleX
			var tt=parseFloat(kk)
			if(tt>1.3){
				console.log(tt)
			}
			if (condition == 1) {
				if (degree > value) {
					n.visible = true
				} else {
					n.visible = false
				}
			} else if (condition == 2) {
				if (degree == value) {
					n.visible = true
				} else {
					n.visible = false
				}
			} else if (condition == 3) {
				if (degree < value) {
					n.visible = true
				} else {
					n.visible = false
				}
			}
		});
		this.links.forEach(function(l) {
			if (l.source.visible == false || l.target.visible == false) {
				l.visible = false
			} else {
				l.visible = true
			}
		})
	};
	VisualGraph.prototype.filterSizes = function(type, condition, value) {
		var hh=new Array()
		this.nodes.forEach(function(n) {
			// var degree = 0;
			// if (type == 'degree') {
			// 	degree = (n.inLinks || []).length + (n.outLinks || []).length
			// } else if (type == 'outdegree') {
			// 	degree = (n.outLinks || []).length
			// } else if (type == 'indegree') {
			// 	degree = (n.inLinks || []).length
			// }
			var kk=n.scaleX
			var tt=parseFloat(kk)
			var ii=hh.indexOf(tt)
			if (ii==-1){
				hh.push(tt)
			}
			// console.log(hh)

			// if (condition == 1) {
			// 	if (degree > value) {
			// 		n.visible = true
			// 	} else {
			// 		n.visible = false
			// 	}
			// } else if (condition == 2) {
			// 	if (degree == value) {
			// 		n.visible = true
			// 	} else {
			// 		n.visible = false
			// 	}
			// } else if (condition == 3) {
			// 	if (degree < value) {
			// 		n.visible = true
			// 	} else {
			// 		n.visible = false
			// 	}
			// }
		});
		hh.sort(function (a,b) {return a<b?1:-1
		})
		console.log(hh)
		this.nodes.forEach(function(m) {
			var kk=m.scaleX
			var tt=parseFloat(kk)
			var ii=hh.indexOf(tt)
            if(ii <value){
            	m.visible=true
			}else{
            	m.visible=false
			}

		});


		this.links.forEach(function(l) {
			if (l.source.visible == false || l.target.visible == false) {
				l.visible = false
			} else {
				l.visible = true
			}
		})
	};
	VisualGraph.prototype.filterLinks = function(condition, value) {
		this.links.forEach(function(l) {
			if (l.source.visible == true && l.target.visible == true) {
				if (condition == 1) {
					if (l.weight > value) {
						l.visible = true
					} else {
						l.visible = false
					}
				} else if (condition == 2) {
					if (l.weight == value) {
						l.visible = true
					} else {
						l.visible = false
					}
				} else if (condition == 3) {
					if (l.weight < value) {
						l.visible = true
					} else {
						l.visible = false
					}
				}
			} else {
				l.visible = false
			}
		})
	};
	VisualGraph.prototype.getTypeMap = function() {
		return this.typeMapStyle
	};
	VisualGraph.prototype.nodeMapColorsByDegree = function(propType, colorArr) {
		var self = this;
		var degreeArr = {};
		self.nodes.forEach(function(n) {
			n.outdegree = (n.outLinks || []).length;
			n.indegree = (n.inLinks || []).length;
			n.degree = n.outdegree + n.indegree;
			if (propType == 'degree') {
				degreeArr[n.degree + ''] = 1
			} else if (propType == 'outdegree') {
				degreeArr[n.outdegree + ''] = 1
			} else {
				degreeArr[n.indegree + ''] = 1
			}
		});
		var degrees = [];
		for (var d in degreeArr) {
			degrees.push(d)
		}
		degrees.sort(function(d1, d2) {
			return Number(d1) > Number(d2) ? 1 : -1
		});
		var ctool = new self.ColorUtils();
		var colors = ctool.getStepColors(colorArr[0], colorArr[1], degrees.length);
		self.nodes.forEach(function(n) {
			var position = 0;
			if (propType == 'degree') {
				position = degrees.indexOf(n.degree + '')
			} else if (propType == 'outdegree') {
				position = degrees.indexOf(n.outdegree + '')
			} else {
				position = degrees.indexOf(n.indegree + '')
			}
			n.fillColor = colors[position].replace('rgb(', '').replace(')', '')
		})
	};
	VisualGraph.prototype.setLineDirected = function(isDirect) {
		this.links.forEach(function(l) {
			l.showArrow = isDirect
		})
	};
	VisualGraph.prototype.setLineDashed = function(isDashed) {
		var self = this;
		var dashed = [0];
		if (isDashed) {
			dashed = [8, 5]
		}
		this.links.forEach(function(l) {
			l.lineDash = dashed
		})
	};
	VisualGraph.prototype.setNodeSize = function(nodeSize) {
		nodeSize = Number(nodeSize) || 35;
		this.defaultNodeSize = nodeSize;
		this.nodes.forEach(function(node) {
			node.radius = Math.round(nodeSize)
		})
	};
	VisualGraph.prototype.setNodeColor = function(hexColor) {
		var rgbColor = this.converHexToRGB(hexColor);
		this.defaultNodeColor = rgbColor;
		this.nodes.forEach(function(node) {
			node.fillColor = rgbColor
		})
	};
	VisualGraph.prototype.addNodeForDrag = function(_node, position) {
		var self = this;
		var flag = false;
		if (!flag) {
			position = self.scene.toSceneEvent(position);
			_node.id = (_node.id == null ? self.nodeIdIndex++ : _node.id);
			_node.x = position.x;
			_node.y = position.y;
			var node = self.newNode(_node);
			node.fixed = true;
			self.nodes.push(node);
			self.scene.add(node);
			return node
		}
		return null
	};
	VisualGraph.prototype.showAll = function() {
		this.nodes.forEach(function(n) {
			if (!n.visible) {
				n.visible = true
			}
		});
		this.links.forEach(function(l) {
			if (!l.visible) {
				l.visible = true
			}
		})
	};
	VisualGraph.prototype.filterChangeVisible = function(entityFalse, linkFalse, infoFilterParams) {
		var _self = this;
		_self.showAll();
		if (entityFalse.length > 0) {
			_self.nodes.forEach(function(n) {
				if (n.type && entityFalse.indexOf(n.type) != -1) {
					n.visible = false
				}
			})
		}
		if (linkFalse.length > 0) {
			_self.links.forEach(function(l) {
				if (l.text && linkFalse.indexOf(l.text) != -1) {
					l.visible = false
				}
			})
		}
		if (infoFilterParams['linkCount']) {
			var _compare = infoFilterParams['linkCount'][0];
			var _input = infoFilterParams['linkCount'][1];
			_self.nodes.forEach(function(n) {
				var degree = (n.inLinks || []).length + (n.outLinks || []).length;
				if (!showOrHide(_compare, _input, degree)) {
					n.visible = false
				}
			})
		}
		if (infoFilterParams['linkOut']) {
			var _compare = infoFilterParams['linkOut'][0];
			var _input = infoFilterParams['linkOut'][1];
			_self.nodes.forEach(function(n) {
				var degree = (n.outLinks || []).length;
				if (!showOrHide(_compare, _input, degree)) {
					n.visible = false
				}
			})
		}
		if (infoFilterParams['linkIn']) {
			var _compare = infoFilterParams['linkIn'][0];
			var _input = infoFilterParams['linkIn'][1];
			_self.nodes.forEach(function(n) {
				var degree = (n.inLinks || []).length;
				if (!showOrHide(_compare, _input, degree)) {
					n.visible = false
				}
			})
		}
		if (infoFilterParams['linkWeight']) {
			var _compare = infoFilterParams['linkWeight'][0];
			var _input = infoFilterParams['linkWeight'][1];
			_self.links.forEach(function(l) {
				if (!showOrHide(_compare, _input, l.weight)) {
					l.visible = false
				}
			})
		}
		if (infoFilterParams['entityDesc']) {
			var _compare = infoFilterParams['entityDesc'][0];
			var _input = infoFilterParams['entityDesc'][1];
			_self.nodes.forEach(function(n) {
				var nodeValue = n.value;
				if (_compare == 1) {
					if (nodeValue != _input) {
						n.visible = false
					}
				} else if (_compare == 2) {
					if (nodeValue.indexOf(_input) == -1) {
						n.visible = false
					}
				}
			})
		}
		_self.links.forEach(function(l) {
			if (!l.source.visible || !l.target.visible) {
				l.visible = false
			}
		});

		function showOrHide(_compareType, compareValue, _degree) {
			if (_compareType == 1) {
				if (_degree > compareValue) {
					return true
				} else {
					return false
				}
			} else if (_compareType == 2) {
				if (_degree == compareValue) {
					return true
				} else {
					return false
				}
			} else {
				if (_degree < compareValue) {
					return true
				} else {
					return false
				}
			}
			return true
		}
	};
	VisualGraph.prototype.delSelect = function() {
		var _self = this;
		_self.nodes.forEach(function(_node) {
			if (_node.selected) {
				_self.removeOneNode(_node)
			}
		})
	};
	VisualGraph.prototype.removeOneNode = function(node) {
		var _self = this;
		if (node) {
			var links = [];
			var index = _self.nodes.indexOf(node);
			if (index > -1) {
				(node.inLinks || []).forEach(function(l) {
					links.push(l)
				});
				(node.outLinks || []).forEach(function(l) {
					links.push(l)
				});
				_self.nodes.splice(index, 1);
				_self.scene.remove(node)
			}
			links.forEach(function(l) {
				index = _self.links.indexOf(l);
				if (index > -1) {
					_self.links.splice(index, 1);
					_self.scene.remove(l)
				}
			});
			node = null
		}
	};
	VisualGraph.prototype.clearAll = function() {
		if (this.scene) {
			this.scene.clear()
		}
		this.nodes = [];
		this.links = [];
		this.nodeIdIndex = 1;
		this.loopName = null;
		this.currentNode = null;
		this.currentLink = null;
		this.typeMapStyle = {};
		this.lineTypeMapStyle = {};
		this.currentLayout = null;
		this.clusterBoxes = [];
		this.currentCluster = null;
		this.drawLinkFlag = false;
		this.virLink = null;
		this.ilayout = {
			size: [this.canvas.width, this.canvas.height],
			alpha: 0.08,
			friction: 0.9,
			linkDistance: 120,
			linkStrength: 0.09,
			charge: -200,
			gravity: 0.015,
			theta: 0.8,
			counter: 0,
			loopName: null
		};
		this.setZoom('zoom1');
		this.stopRunningLayout(1)
	};
	VisualGraph.prototype.rightMenuOprate = function(optType) {
		var self = this;
		switch (optType) {
			case 'allSelect':
				self.selectAll();
				break;
			case 'rebackSel':
				self.reverseSelect();
				break;
			case 'showAll':
				self.showAll();
				break;
			case 'selRelate':
				self.selectRelate();
				break;
			case 'showNodes':
				self.showNodes();
				break;
			case 'showSelNode': //todo 显示选中节点信息
				self.showSelected();
				break;
			case 'hideSelNode':
				self.hideSelected();
				break;
			case 'delSelect':
				self.delSelect();
				break;
			case 'clearAll':
				this.clearAll();
				break;
			case 'hideIsolatedNodes':
				self.hideIsolatedNodes();
				break;
			case 'showLinks':
				self.showAllLink();
				break;
			case 'hideLinks':
				self.hideAllLink();
				break;
			case 'sourcelphaMap':
				self.nodeMapAlphaByDegree();
				break;
			case 'saveImage':
				self.saveImage(2000, 2000);
				break;
			case 'deleteNode':
				self.deleteNode(self.currentNode);
				self.currentNode = null;
				break;
			case 'nodeConnent':
				self.begainAddLine(self.currentNode);
				break;
			case 'delEdge':
				self.deleteLink(self.currentLink);
				self.currentLink = null;
				break;
			case 'expanded':
				self.expanded(self.currentNode);
				break;
			case 'contract':
				self.contract(self.currentNode);
				break;
			case 'directedLine':
				self.setLineDirected(true);
				break;
			case 'undirectedLine':
				self.setLineDirected(false);
				break;
			case 'showLineLabel':
				self.showLinkLabel(true);
				break;
			case 'hideLineLabel':
				self.showLinkLabel(false);
				break;
			case 'Rline':
				self.setLineDashed(false);
				break;
			case 'Vline':
				self.setLineDashed(true);
				break;
			default:
				break
		}
	};
	VisualGraph.prototype.ColorUtils = function() {
		var colorRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|°|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|°|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i;

		function getStepColors(start, end, step) {
			start = toRGBA(start);
			end = toRGBA(end);
			start = getData(start);
			end = getData(end);
			var colors = [];
			var stepR = (end[0] - start[0]) / step;
			var stepG = (end[1] - start[1]) / step;
			var stepB = (end[2] - start[2]) / step;
			for (var i = 0, r = start[0], g = start[1], b = start[2]; i < step; i++) {
				colors[i] = toColor([adjust(Math.floor(r), [0, 255]), adjust(Math.floor(g), [0, 255]), adjust(Math.floor(b), [0, 255])]);
				r += stepR;
				g += stepG;
				b += stepB
			}
			r = end[0];
			g = end[1];
			b = end[2];
			colors[i] = toColor([r, g, b]);
			return colors
		};

		function toColor(data, format) {
			format = format || 'rgb';
			if (data && (data.length === 3 || data.length === 4)) {
				data = map(data, function(c) {
					return c > 1 ? Math.ceil(c) : c
				});
				if (format.indexOf('hex') > -1) {
					data = map(data.slice(0, 3), function(c) {
						c = Number(c).toString(16);
						return (c.length === 1) ? '0' + c : c
					});
					return '#' + data.join('')
				} else if (format.indexOf('hs') > -1) {
					var sx = map(data.slice(1, 3), function(c) {
						return c + '%'
					});
					data[1] = sx[0];
					data[2] = sx[1]
				}
				if (format.indexOf('a') > -1) {
					if (data.length === 3) {
						data.push(1)
					}
					data[3] = adjust(data[3], [0, 1]);
					return format + '(' + data.slice(0, 4).join(',') + ')'
				}
				return format + '(' + data.slice(0, 3).join(',') + ')'
			}
		};

		function convert(color, format) {
			var data = getData(color);
			var alpha = data[3];
			if (typeof alpha === 'undefined') {
				alpha = 1
			}
			data[3] = alpha;
			return toColor(data, format)
		};

		function toRGBA(color) {
			return convert(color, 'rgba')
		};

		function trim(color) {
			color = String(color);
			color = color.replace(/(^\s*)|(\s*$)/g, '');
			if (/^[^#]*?$/i.test(color)) {
				color = color.replace(/\s/g, '')
			}
			return color
		};

		function normalize(color) {
			color = trim(color);
			if (/^#[0-9a-f]{3}$/i.test(color)) {
				var d = color.replace('#', '').split('');
				color = '#' + d[0] + d[0] + d[1] + d[1] + d[2] + d[2]
			}
			return color
		};

		function getData(color) {
			color = normalize(color);
			var r = color.match(colorRegExp);
			if (r === null) {
				return
			}
			var d, a, data = [],
				rgb;
			if (r[2]) {
				d = r[2].replace('#', '').split('');
				rgb = [d[0] + d[1], d[2] + d[3], d[4] + d[5]];
				data = map(rgb, function(c) {
					return adjust(parseInt(c, 16), [0, 255])
				})
			} else if (r[4]) {
				var rgba = (r[4]).split(',');
				a = rgba[3];
				rgb = rgba.slice(0, 3);
				data = map(rgb, function(c) {
					c = Math.floor(c.indexOf('%') > 0 ? parseInt(c, 0) * 2.55 : c);
					return adjust(c, [0, 255])
				});
				if (typeof a !== 'undefined') {
					data.push(adjust(parseFloat(a), [0, 1]))
				}
			}
			return data
		};

		function map(array, fun) {
			if (typeof fun !== 'function') {
				throw new TypeError();
			}
			var len = array ? array.length : 0;
			for (var i = 0; i < len; i++) {
				array[i] = fun(array[i])
			}
			return array
		};

		function adjust(value, region) {
			if (value <= region[0]) {
				value = region[0]
			} else if (value >= region[1]) {
				value = region[1]
			}
			return value
		};

		function colorHex(rgb) {
			var _this = rgb;
			var aColor = _this.replace(/(?:(|)|rgb|RGB)*/g, "").replace('(', '').replace(')', '').split(",");
			var strHex = "#";
			for (var i = 0; i < aColor.length; i++) {
				var hex = Number(aColor[i]).toString(16);
				hex = hex.length < 2 ? '0' + hex : hex;
				if (hex === "0") {
					hex += hex
				}
				strHex += hex
			}
			return strHex
		};
		return {
			getStepColors: getStepColors,
			colorHex: colorHex
		}
	};
	VisualGraph.prototype.begainAddLine = function(node) {
		this.drawLinkFlag = true
	};
	VisualGraph.prototype.computeParentAngle = function(node) {
		var angleRadian = 0;
		var r = 100;
		var parentNodes = [],
			parentFlag = true;
		(node.inLinks || []).forEach(function(l) {
			parentNodes.push(l.source)
		});
		if (parentNodes.length == 0) {
			parentFlag = false;
			(node.outLinks || []).forEach(function(l) {
				parentNodes.push(l.target)
			})
		}
		var maxParentNode;
		maxParentNode = parentNodes.sort(function(n1, n2) {
			if (parentFlag) {
				return ((n1.outLinks || []).length + (n1.inLinks || []).length) < ((n2.outLinks || []).length + (n2.inLinks || []).length)
			} else {
				return ((n1.outLinks || []).length + (n1.inLinks || []).length) > ((n2.outLinks || []).length + (n2.inLinks || []).length)
			}
		})[0];
		if (maxParentNode) {
			var xp = maxParentNode.x;
			var yp = maxParentNode.y;
			var x0 = node.x;
			var y0 = node.y;
			var dist = Math.sqrt(Math.pow(xp - x0, 2) + Math.pow(yp - y0, 2));
			var k = r / (dist - r);
			var xc = (x0 + (k * xp)) / (1 + k);
			var val = (xc - x0) / r;
			if (val < -1) {
				val = -1
			}
			if (val > 1) {
				val = 1
			}
			angleRadian = Math.acos(val);
			if (yp > y0) {
				angleRadian = 2 * Math.PI - angleRadian
			}
		}
		return angleRadian
	};
	VisualGraph.prototype.activeAddNodeLinks = function(_nodes, _links) {
		var _self = this;
		var baseX = (_self.canvas.width / 2) || 500,
			baseY = (_self.canvas.height / 2) || 300;
		if (_self.currentNode != null) {
			baseX = _self.currentNode.cx, baseY = _self.currentNode.cy
		}
		var newNodes = [],
			newLinks = [];
		let radius, angle;
		const initialAngle = Math.PI * (3 - Math.sqrt(5));
		(_nodes || []).forEach(function(_node, i) {
			radius = 5 * Math.sqrt(i);
			angle = i * initialAngle;
			_node.x = baseX + radius * Math.cos(angle);
			_node.y = baseY + radius * Math.sin(angle);
			var hasNodes = _self.nodes.filter(function(n) {
				return n.id == _node.id
			});
			if (hasNodes.length == 0) {
				if (_self.currentNode != null) {
					if (_node.id != _self.currentNode.id) {
						var node = _self.newNode(_node);
						_self.nodes.push(node);
						_self.scene.add(node);
						newNodes.push(node)
					} else {
						_self.currentNode.id = _node.id
					}
				} else {
					var node = _self.newNode(_node);
					_self.nodes.push(node);
					_self.scene.add(node);
					newNodes.push(node)
				}
			}
		});
		var _nodes_ = _self.nodes;
		(_links || []).forEach(function(_link) {
			var hasLinks = _self.links.filter(function(l) {
				return l.source.id == _link.source && l.target.id == _link.target
			});
			if (hasLinks.length == 0) {
				var sourceNode = _nodes_.filter(function(_node) {
					return _node.id == _link.source
				})[0];
				var targetNode = _nodes_.filter(function(_node) {
					return _node.id == _link.target
				})[0];
				if (sourceNode != null && targetNode != null) {
					var link = _self.newEdge(sourceNode, targetNode);
					link.label = _link.label || _link.type || '';
					link.text = link.label;
					link.showlabel = true;
					link.type = _link.type;
					link.weight = _link.weight || 1;
					link.strokeColor = _link.strokeColor || '100,100,220';
					link.fontColor = _link.fontColor || '100,100,220';
					link.font = _link.font || '10px yahei';
					_self.links.push(link);
					_self.scene.add(link);
					newLinks.push(link)
				}
			}
		});
		var unResetNodes = _self.nodes.filter(function(n) {
			return !n.hasOwnProperty('charge')
		});
		unResetNodes.forEach(function(n) {
			newNodes.push(n)
		});
		if (_self.currentNode != null) {
			newNodes.push(_self.currentNode)
		}
		_self.initLayoutParams(newNodes, newLinks);
		if (newNodes.length > 1) {
			_self.nodes.map(function(n) {
				n.fixed = false
			});
			if (_self.currentNode != null) {
				(_self.currentNode.inLinks || []).forEach(function(l) {
					var isNewNode = newNodes.filter(function(n) {
						return n == l.source
					});
					if (isNewNode == null || isNewNode.length == 0) {
						l.source.fixed = true
					}
				});
				_self.currentNode.fixed = true
			}
			_self.runLayoutEngin()
		}
	};
	VisualGraph.prototype.stopRunningLayout = function(layzeTime) {
		var self = this;
		setTimeout(function() {
			cancelAnimationFrame(self.ilayout.loopName);
			self.ilayout.loopName = null;
			self.ilayout.counter = 0
		}, layzeTime)
	};
	VisualGraph.prototype.loopRunLayout = function(callback) {
		var _self = this;
		if (typeof callback == 'function') {
			cancelAnimationFrame(_self.ilayout.loopName);
			_self.ilayout.loopName = null;

			function loop() {
				cancelAnimationFrame(_self.ilayout.loopName);
				if (_self.ilayout.counter++ < 1000) {
					callback();
					_self.ilayout.loopName = requestAnimationFrame(loop)
				} else {
					_self.stopRunningLayout(1)
				}
			};
			_self.ilayout.loopName = requestAnimationFrame(loop)
		}
	};
	VisualGraph.prototype.initLayoutParams = function(nodes, links) {
		var _self = this;
		_self.nodes.forEach(function(n, i) {
			n.weight = n.weight || 1;
			n.px = n.x;
			n.py = n.y;
			n.charge = n.charge || _self.ilayout.charge
		});
		_self.links.forEach(function(l, i) {
			var source = l.source;
			var target = l.target;
			l.distance = l.distance || _self.ilayout.linkDistance;
			l.strength = l.strength || _self.ilayout.linkStrength;
			++source.weight;
			++target.weight
		})
	};
	VisualGraph.prototype.runLayoutEngin = function() {
		var _self = this;
		if (_self.nodes.length == 0) {
			return
		}
		_self.ilayout.counter = 0;
		_self.loopRunLayout(tick);

		function alpha1(alpha) {
			if (!arguments.length) {
				return _self.ilayout.alpha
			}
			if (_self.ilayout.alpha) {
				if (alpha > 0) {
					_self.ilayout.alpha = alpha
				} else {
					_self.ilayout.alpha = 0
				}
			} else if (alpha > 0) {
				tick()
			}
			return this
		};

		function resume() {
			return alpha1(0.1)
		};

		function stop() {
			return alpha1(0)
		};

		function tick() {
			var q, i, o, s, t, l, k, x, y;
			_self.links.forEach(function(link, i) {
				s = link.source;
				t = link.target;
				x = t.x - s.x;
				y = t.y - s.y;
				if (l = (x * x + y * y)) {
					l = _self.ilayout.alpha * link.strength * ((l = Math.sqrt(l)) - link.distance) / l;
					x *= l;
					y *= l;
					t.x -= x * (k = s.weight / (t.weight + s.weight));
					t.y -= y * k;
					s.x += x * (k = 1 - k);
					s.y += y * k
				}
			});
			var n = _self.nodes.length;
			if (k = _self.ilayout.alpha * _self.ilayout.gravity) {
				x = _self.ilayout.size[0] / 2;
				y = _self.ilayout.size[1] / 2;
				i = -1;
				if (k) {
					while (++i < n) {
						o = _self.nodes[i];
						o.x += (x - o.x) * k;
						o.y += (y - o.y) * k
					}
				}
			}
			if (_self.ilayout.charge) {
				forceAccumulate(q = quadtree(_self.nodes), _self.ilayout.alpha);
				i = -1;
				while (++i < n) {
					if (!(o = _self.nodes[i]).fixed) {
						q.visit(repulse(o))
					}
				}
			}
			i = -1;
			while (++i < n) {
				o = _self.nodes[i];
				if (o.fixed) {
					if (!o.isDragging) {
						o.x = o.px;
						o.y = o.py
					} else {
						o.px = o.x;
						o.py = o.y
					}
				} else {
					o.x -= (o.px - (o.px = o.x)) * _self.ilayout.friction;
					o.y -= (o.py - (o.py = o.y)) * _self.ilayout.friction
				}
			}
			function repulse(node) {
				return function(quad, x1, y1, x2, y2) {
					if (quad.point !== node) {
						var dx = quad.cx - node.x,
							dy = quad.cy - node.y,
							dn = 1 / Math.sqrt(dx * dx + dy * dy);
						if ((x2 - x1) * dn < _self.ilayout.theta) {
							var k = quad.charge * dn * dn;
							node.px -= dx * k;
							node.py -= dy * k;
							return true
						}
						if (quad.point && isFinite(dn)) {
							var k = quad.pointCharge * dn * dn;
							node.px -= dx * k;
							node.py -= dy * k
						}
					}
					return !quad.charge
				}
			}
		};

		function forceAccumulate(quad, alpha) {
			var cx = 0,
				cy = 0;
			quad.charge = 0;
			if (!quad.leaf) {
				var nodes = quad.nodes,
					n = nodes.length,
					i = -1,
					c;
				while (++i < n) {
					c = nodes[i];
					if (c == null) {
						continue
					}
					forceAccumulate(c, alpha);
					quad.charge += c.charge;
					cx += c.charge * c.cx;
					cy += c.charge * c.cy
				}
			}
			if (quad.point) {
				if (!quad.leaf) {
					quad.point.x += Math.random() - 0.5;
					quad.point.y += Math.random() - 0.5
				}
				var k = _self.ilayout.alpha * quad.point.charge;
				quad.charge += quad.pointCharge = k;
				cx += k * quad.point.x;
				cy += k * quad.point.y
			}
			quad.cx = cx / quad.charge;
			quad.cy = cy / quad.charge
		};

		function quadtree(points, x1, y1, x2, y2) {
			var p, i = -1,
				n = points.length;
			if (n && isNaN(points[0].x)) {
				points = points.map(function(p) {
					return {
						x: p[0],
						y: p[1]
					}
				})
			}
			if (arguments.length < 5) {
				if (arguments.length === 3) {
					y2 = x2 = y1;
					y1 = x1
				} else {
					x1 = y1 = Infinity;
					x2 = y2 = -Infinity;
					while (++i < n) {
						p = points[i];
						if (p.x < x1) {
							x1 = p.x
						}
						if (p.y < y1) {
							y1 = p.y
						}
						if (p.x > x2) {
							x2 = p.x
						}
						if (p.y > y2) {
							y2 = p.y
						}
					}
					var dx = x2 - x1,
						dy = y2 - y1;
					if (dx > dy) {
						y2 = y1 + dx
					} else {
						x2 = x1 + dy
					}
				}
			};

			function insert(n, p, x1, y1, x2, y2) {
				if (isNaN(p.x) || isNaN(p.y)) {
					return
				}
				if (n.leaf) {
					var v = n.point;
					if (v) {
						if ((Math.abs(v.x - p.x) + Math.abs(v.y - p.y)) < 0.01) {
							insertChild(n, p, x1, y1, x2, y2)
						} else {
							n.point = null;
							insertChild(n, v, x1, y1, x2, y2);
							insertChild(n, p, x1, y1, x2, y2)
						}
					} else {
						n.point = p
					}
				} else {
					insertChild(n, p, x1, y1, x2, y2)
				}
			};

			function insertChild(n, p, x1, y1, x2, y2) {
				var sx = (x1 + x2) * 0.5,
					sy = (y1 + y2) * 0.5,
					right = p.x >= sx,
					bottom = p.y >= sy,
					i = (bottom << 1) + right;
				n.leaf = false;
				n = n.nodes[i] || (n.nodes[i] = {
					leaf: true,
					nodes: [],
					point: null
				});
				if (right) {
					x1 = sx
				} else {
					x2 = sx
				}
				if (bottom) {
					y1 = sy
				} else {
					y2 = sy
				}
				insert(n, p, x1, y1, x2, y2)
			};

			function quadtreeVisit(f, node, x1, y1, x2, y2) {
				if (!f(node, x1, y1, x2, y2)) {
					var sx = (x1 + x2) * 0.5,
						sy = (y1 + y2) * 0.5,
						children = node.nodes;
					if (children[0]) {
						quadtreeVisit(f, children[0], x1, y1, sx, sy)
					}
					if (children[1]) {
						quadtreeVisit(f, children[1], sx, y1, x2, sy)
					}
					if (children[2]) {
						quadtreeVisit(f, children[2], x1, sy, sx, y2)
					}
					if (children[3]) {
						quadtreeVisit(f, children[3], sx, sy, x2, y2)
					}
				}
			};
			var root = {
				leaf: true,
				nodes: [],
				point: null
			};
			root.add = function(p) {
				insert(root, p, x1, y1, x2, y2)
			};
			root.visit = function(f) {
				quadtreeVisit(f, root, x1, y1, x2, y2)
			};
			points.forEach(root.add);
			return root
		}
	};
	VisualGraph.prototype.findNodeById = function(nodeId) {
		var nodes = this.nodes.filter(function(n) {
			return n.id == nodeId
		});
		if (nodes.length > 0) {
			var node = nodes[0];
			node.selected = true;
			node.visible = true;
			this.scene.addToSelected(node);
			this.scene.zFocusEle(node)
		}
	};
	var VisGraph = VisualGraph;
	if (typeof module !== 'undefined' && typeof exports === 'object') {
		module.exports = VisGraph
	} else if (typeof define === 'function' && (define.amd || define.cmd)) {
		define(function() {
			return VisGraph
		})
	} else {
		this.VisGraph = VisGraph
	}
}).call(this || (typeof window !== 'undefined' ? window : global));
;
(function() {
	var ARFLayout = function(nodes, links) {
		this.nodes = nodes;
		this.links = links;
		this.neighborAttraction = 3.0;
		this.attraction = 0.03;
		this.forceScale = 0.0;
		this.deltaT = 5.0;
		this.forceCutoff = 10.0;
		this.neighbers = {};
		this.inited = false
	};
	ARFLayout.prototype.getConfig = function() {
		return [{
			'label': '邻点引力',
			'neighborAttraction': 8.0
		}, {
			'label': '引力',
			'attraction': 0.05
		}, {
			'label': '力缩放系数',
			'forceScale': 8.0
		}]
	};
	ARFLayout.prototype.resetConfig = function(layoutConfig) {
		var _self = this;
		if (layoutConfig) {
			this.neighborAttraction = Number(layoutConfig['neighborAttraction']) || 8.0;
			this.attraction = Number(layoutConfig['attraction']) || 0.05;
			this.forceScale = Number(layoutConfig['forceScale']) || 8.0;
			this.neighbers = {};
			_self.nodes.forEach(function(n) {
				n.degree = (n.inLinks || []).length + (n.outLinks || []).length
			})
		}
		this.inited = true
	};
	ARFLayout.prototype.newLayoutData = function() {
		var layoutData = {
			finishx: 0.0,
			finishy: 0.0,
			xdistance: 0.0,
			ydistance: 0.0
		};
		return layoutData
	};
	ARFLayout.prototype.runLayout = function() {
		if (this.inited) {
			this.goAlgo()
		}
	};
	ARFLayout.prototype.initAlgo = function() {
		var _self = this;
		_self.neighborAttraction = 8.0;
		_self.attraction = 0.12;
		_self.forceScale = 5.0;
		_self.deltaT = 5.0;
		_self.forceCutoff = 10.0;
		_self.nodes.forEach(function(n) {
			var inLinks = n.inLinks || [];
			var outLinks = n.outLinks || [];
			n.degree = inLinks.length + outLinks.length
		});
		this.inited = true
	};
	ARFLayout.prototype.goAlgo = function() {
		var _self = this;
		var minX = Infinity,
			minY = Infinity;
		_self.nodes.forEach(function(node) {
			var f = _self.getForceforNode(node);
			var degree = node.degree;
			var deltaIndividual = degree <= 1 ? _self.deltaT : _self.deltaT / Math.pow(degree, 0.4);
			f = {
				x: f.x * deltaIndividual,
				y: f.y * deltaIndividual
			};
			node.x += f.x;
			node.y += f.y;
			minX = Math.min(minX, node.x);
			minY = Math.min(minY, node.y)
		});
		_self.nodes.forEach(function(node) {
			node.x += (100 - minX);
			node.y += (100 - minY)
		})
	};
	ARFLayout.prototype.getForceforNode = function(node) {
		var _self = this;
		var numNodes = _self.nodes.length;
		var mDot = {
			x: 0,
			y: 0
		};
		if (node.x == 0 && node.y == 0) {
			return mDot
		}
		_self.nodes.forEach(function(n) {
			if (node.id != n.id && (n.x != 0 || n.y != 0)) {
				var tempX = n.x - node.x;
				var tempY = n.y - node.y;
				if (tempX == 0 && tempY == 0) {
					tempX = 50;
					tempY = 50
				}
				var multiplier = 1.0;
				if (_self.isAdjacent(node, n)) {
					multiplier = _self.neighborAttraction
				}
				multiplier = multiplier * (_self.attraction / Math.sqrt(numNodes));
				mDot = {
					x: mDot.x + tempX * multiplier,
					y: mDot.y + tempY * multiplier
				};
				multiplier = 1.0 / Math.sqrt(tempX * tempX + tempY * tempY);
				mDot = {
					x: mDot.x - tempX * multiplier * _self.forceScale,
					y: mDot.y - tempY * multiplier * _self.forceScale
				}
			}
		});
		var distance = _self.distance(0.0, 0.0, mDot.x, mDot.y);
		if (distance > _self.forceCutoff) {
			var mult = _self.forceCutoff / distance;
			mDot = {
				x: mDot.x * mult,
				y: mDot.y * mult
			}
		}
		return mDot
	};
	ARFLayout.prototype.getDegree = function(node) {
		return (node.inLinks || []).length + (node.outLinks || []).length
	};
	ARFLayout.prototype.isAdjacent = function(node, otherNode) {
		var neighbers = [];
		(node.inLinks || []).forEach(function(l) {
			neighbers.push(l.source)
		});
		(node.outLinks || []).forEach(function(l) {
			neighbers.push(l.target)
		});
		var flag = false;
		neighbers.forEach(function(n) {
			if (n.id == otherNode.id) {
				flag = true
			}
		});
		return flag
	};
	ARFLayout.prototype.distance = function(px, py, x, y) {
		px -= x;
		py -= y;
		return Math.sqrt(px * px + py * py)
	};
	var CircleLayout = function(nodes, links) {
		this.nodes = nodes;
		this.links = links;
		this.diameter = 500;
		this.boolfixeddiameter = false;
		this.boolTransition = true;
		this.cumethod = 'auto';
		this.scale = 1.2;
		this.TWO_PI = Math.PI * 2;
		this.intSteps = 50;
		this.inited = false
	};
	CircleLayout.prototype.getConfig = function() {
		return [{
			'label': '直径计算',
			'cumethod': [{
				label: '自动',
				value: 'auto'
			}, {
				label: '指定',
				value: 'metal'
			}]
		}, {
			'label': '直径大小',
			'diameter': 500
		}]
	};
	CircleLayout.prototype.resetConfig = function(layoutConfig) {
		this.diameter = Number(layoutConfig['diameter']) || 500;
		this.cumethod = layoutConfig['cumethod'] || 'auto';
		if (this.cumethod == 'auto') {
			this.boolfixeddiameter = false
		} else {
			this.boolfixeddiameter = true
		}
		this.initAlgo()
	};
	CircleLayout.prototype.newLayoutData = function() {
		var layoutData = {
			finishx: 0.0,
			finishy: 0.0,
			xdistance: 0.0,
			ydistance: 0.0
		};
		return layoutData
	};
	CircleLayout.prototype.runLayout = function() {
		if (this.inited) {
			this.goAlgo()
		}
	};
	CircleLayout.prototype.initAlgo = function() {
		var _self = this;
		var nodes = _self.nodes;
		var nodeCount = nodes.length;
		var nodeCoords = [];
		var tempcirc = 0.0;
		var temdiameter = 0.0;
		var index = 0;
		var noderadius = 0.0;
		var theta = _self.TWO_PI / nodeCount;
		var lasttheta = 0.0;
		nodes = nodes.sort(function(n1, n2) {
			var x = (n1.inLinks || []).length + (n1.outLinks || []).length;
			var y = (n2.inLinks || []).length + (n2.outLinks || []).length;
			if (x > y) {
				return -1
			} else if (x < y) {
				return 1
			} else {
				return 0
			}
		});
		if (!_self.boolfixeddiameter) {
			for (var i = 0; i < nodeCount; i++) {
				var n = nodes[i];
				tempcirc += (n.scaleX * n.radius) * 1.2
			}
			tempcirc *= _self.scale;
			temdiameter = tempcirc / Math.PI;
			theta = _self.TWO_PI / tempcirc
		} else {
			temdiameter = _self.diameter
		}
		var radius = temdiameter / 2;
		for (var i = 0; i < nodeCount; i++) {
			var n = nodes[i];
			if (!_self.boolfixeddiameter) {
				noderadius = n.scaleX * n.radius;
				var noderadian = theta * noderadius * _self.scale;
				nodeCoords = _self.cartCoors(radius, 1, lasttheta + noderadian);
				lasttheta += noderadius * 1.2 * theta * _self.scale
			} else {
				nodeCoords = _self.cartCoors(radius, index, theta)
			}
			var posData = _self.newLayoutData();
			posData.finishx = nodeCoords[0];
			posData.finishy = nodeCoords[1];
			posData.xdistance = (1.0 / _self.intSteps) * (nodeCoords[0] - n.x);
			posData.ydistance = (1.0 / _self.intSteps) * (nodeCoords[1] - n.y);
			n.layoutData = posData;
			index++
		}
		this.inited = true
	};
	CircleLayout.prototype.goAlgo = function() {
		var _self = this;
		var position = null;
		var nodes = _self.nodes;
		var length = nodes.length;
		for (var i = 0; i < length; i++) {
			var n = nodes[i];
			position = n.layoutData;
			if (position == null) {
				continue
			}
			if (_self.boolTransition) {
				var currentDistance = Math.abs(n.x - position.finishx);
				var nextDistance = Math.abs((n.x + position.xdistance) - position.finishx);
				if (nextDistance < currentDistance) {
					n.x += position.xdistance
				} else {
					n.x = position.finishx
				}
				currentDistance = Math.abs(n.y - position.finishy);
				nextDistance = Math.abs((n.y + position.ydistance) - position.finishy);
				if (nextDistance < currentDistance) {
					n.y += position.ydistance
				} else {
					n.y = position.finishy
				}
				if (n.x == position.finishx && n.y == position.finishy) {
					n.layoutData = null
				}
			} else {
				n.x = position.finishx;
				n.y = position.finishy;
				n.layoutData = null
			}
		}
	};
	CircleLayout.prototype.cartCoors = function(radius, whichInt, theta) {
		var coOrds = [];
		coOrds[0] = (radius * Math.cos(theta * whichInt + Math.PI / 2));
		coOrds[1] = (radius * Math.sin(theta * whichInt + Math.PI / 2));
		return coOrds
	};
	var DualCircleLayout = function(nodes, links) {
		this.nodes = nodes;
		this.links = links;
		this.highdegreeoutside = false;
		this.secondarynodecount = 15;
		this.boolNoOverlap = true;
		this.boolTransition = true;
		this.TWO_PI = Math.PI * 2;
		this.intSteps = 50;
		this.inited = false
	};
	DualCircleLayout.prototype.getConfig = function() {
		return [{
			'label': '分布位置',
			'position': [{
				label: '环内部',
				value: 'inside'
			}, {
				label: '环外部',
				value: 'outside'
			}]
		}, {
			'label': '核心数',
			'secondarynodecount': 15
		}]
	};
	DualCircleLayout.prototype.resetConfig = function(layoutConfig) {
		this.secondarynodecount = Number(layoutConfig['secondarynodecount']) || 15;
		this.position = layoutConfig['position'] || 'inside';
		if (this.position == 'inside') {
			this.highdegreeoutside = false
		} else {
			this.highdegreeoutside = true
		}
		this.initAlgo()
	};
	DualCircleLayout.prototype.runLayout = function() {
		if (this.inited) {
			this.goAlgo()
		}
	};
	DualCircleLayout.prototype.newLayoutData = function() {
		var layoutData = {
			finishx: 0.0,
			finishy: 0.0,
			xdistance: 0.0,
			ydistance: 0.0
		};
		return layoutData
	};
	DualCircleLayout.prototype.initAlgo = function() {
		var _self = this;
		var nodes = _self.nodes;
		var nodeCounts = nodes.length;
		var nodeCoords = [];
		var tmpsecondarycirc = 0,
			tmpprimarycirc = 0;
		var lasttheta = 0,
			secondary_theta = 0,
			correct_theta = 0;
		var primary_scale = 1,
			secondry_scale = 1;
		if (_self.secondarynodecount > nodeCounts) {
			_self.secondarynodecount = 1
		}
		nodes = nodes.sort(function(n1, n2) {
			var x = (n1.inLinks || []).length + (n1.outLinks || []).length;
			var y = (n2.inLinks || []).length + (n2.outLinks || []).length;
			if (x > y) {
				return -1
			} else if (x < y) {
				return 1
			} else {
				return 0
			}
		});
		for (var i = 0; i < nodeCounts; i++) {
			var n = nodes[i];
			var noderadius = n.scaleX * n.radius;
			if (i < _self.secondarynodecount) {
				tmpsecondarycirc += noderadius * 2.0
			} else {
				tmpprimarycirc += noderadius * 2.0
			}
		}
		var circum_ratio = tmpprimarycirc / tmpsecondarycirc;
		if (circum_ratio < 2) {
			primary_scale = 2 / circum_ratio;
			tmpprimarycirc = 2 * tmpsecondarycirc
		}
		if (_self.highdegreeoutside) {
			secondry_scale = (2 * tmpprimarycirc) / tmpsecondarycirc;
			tmpsecondarycirc = tmpprimarycirc * 2
		} else {
			secondry_scale = tmpprimarycirc / (2 * tmpsecondarycirc);
			tmpsecondarycirc = tmpprimarycirc / 2
		}
		tmpprimarycirc *= 1.2;
		primary_theta = _self.TWO_PI / tmpprimarycirc;
		var primaryradius = tmpprimarycirc / Math.PI / 2;
		tmpsecondarycirc *= 1.2;
		secondary_theta = _self.TWO_PI / tmpsecondarycirc;
		var secondaryradius = tmpsecondarycirc / Math.PI / 2;
		for (var i = 0; i < nodeCounts; i++) {
			var n = nodes[i];
			var noderadius = n.scaleX * n.radius;
			if (i < _self.secondarynodecount) {
				if (secondry_scale > 2) {
					noderadius = tmpsecondarycirc / ((2 * _self.secondarynodecount) * secondry_scale * 1.2)
				}
				var noderadian = secondary_theta * noderadius * 1.2 * secondry_scale;
				if (i == 0) {
					correct_theta = noderadian
				}
				nodeCoords = _self.cartCoors(secondaryradius, 1, (lasttheta + noderadian) - correct_theta);
				lasttheta += noderadius * 2 * secondary_theta * 1.2 * secondry_scale
			} else {
				var noderadian = primary_theta * noderadius * 1.2 * primary_scale;
				if (i == _self.secondarynodecount) {
					lasttheta = 0;
					correct_theta = noderadian
				}
				nodeCoords = _self.cartCoors(primaryradius, 1, (lasttheta + noderadian) - correct_theta);
				lasttheta += noderadius * 2 * primary_theta * 1.2 * primary_scale
			}
			var posData = _self.newLayoutData();
			posData.finishx = nodeCoords[0];
			posData.finishy = nodeCoords[1];
			posData.xdistance = (1.0 / _self.intSteps) * (nodeCoords[0] - n.x);
			posData.ydistance = (1.0 / _self.intSteps) * (nodeCoords[1] - n.y);
			n.layoutData = posData
		}
		this.inited = true
	};
	DualCircleLayout.prototype.goAlgo = function() {
		var _self = this;
		var position = null;
		var nodes = _self.nodes;
		var length = nodes.length;
		for (var i = 0; i < length; i++) {
			var n = nodes[i];
			position = n.layoutData;
			if (position == null) {
				continue
			}
			if (_self.boolTransition) {
				var currentDistance = Math.abs(n.x - position.finishx);
				var nextDistance = Math.abs((n.x + position.xdistance) - position.finishx);
				if (nextDistance < currentDistance) {
					n.x += position.xdistance
				} else {
					n.x = position.finishx
				}
				currentDistance = Math.abs(n.y - position.finishy);
				nextDistance = Math.abs((n.y + position.ydistance) - position.finishy);
				if (nextDistance < currentDistance) {
					n.y += position.ydistance
				} else {
					n.y = position.finishy
				}
				if (n.x == position.finishx && n.y == position.finishy) {
					n.layoutData = null
				}
			} else {
				n.x = position.finishx;
				n.y = position.finishy;
				n.layoutData = null
			}
		}
	};
	DualCircleLayout.prototype.cartCoors = function(radius, whichInt, theta) {
		var coOrds = [];
		coOrds[0] = (radius * Math.cos(theta * whichInt + Math.PI / 2));
		coOrds[1] = (radius * Math.sin(theta * whichInt + Math.PI / 2));
		return coOrds
	};
	var LayerLayout = function(nodes, links) {
		this.nodes = nodes;
		this.links = links;
		this.outCircleNodes = 11;
		this.layerDistance = 30;
		this.boolTransition = true;
		this.intSteps = 50;
		this.inited = false
	};
	LayerLayout.prototype.getConfig = function() {
		return [{
			'label': '外层点数',
			'outCircleNodes': 11
		}, {
			'label': '层间距',
			'layerDistance': 30
		}]
	};
	LayerLayout.prototype.resetConfig = function(layoutConfig) {
		this.outCircleNodes = Number(layoutConfig['outCircleNodes']) || 11;
		this.layerDistance = Number(layoutConfig['layerDistance']) || 30;
		this.initAlgo()
	};
	LayerLayout.prototype.runLayout = function() {
		if (this.inited) {
			this.goAlgo()
		}
	};
	LayerLayout.prototype.newLayoutData = function() {
		var layoutData = {
			finishx: 0.0,
			finishy: 0.0,
			xdistance: 0.0,
			ydistance: 0.0
		};
		return layoutData
	};
	LayerLayout.prototype.initAlgo = function() {
		var _self = this;
		var nodes = _self.nodes;
		var nodeCount = nodes.length;
		var innerCircleRaduis = 0,
			nextLayerRoundLong = 0,
			currentRoundLong = 0;
		var maxTheta = 0,
			theta = 0;
		nodes = nodes.sort(function(n1, n2) {
			var x = (n1.inLinks || []).length + (n1.outLinks || []).length;
			var y = (n2.inLinks || []).length + (n2.outLinks || []).length;
			if (x < y) {
				return -1
			} else if (x > y) {
				return 1
			} else {
				return 0
			}
		});
		if (_self.outCircleNodes > nodeCount) {
			_self.outCircleNodes = 0
		}
		for (var i = 0; i < nodeCount; i++) {
			var node = nodes[i];
			currentRoundLong += node.radius * node.scaleX;
			if (currentRoundLong > nextLayerRoundLong) {
				nextLayerNodeRaduis = node.radius * node.scaleX;
				nextCircleRaduis = innerCircleRaduis + _self.layerDistance + nextLayerNodeRaduis;
				nextLayerRoundLong = 2 * Math.PI * nextCircleRaduis;
				innerCircleRaduis = innerCircleRaduis + _self.layerDistance + node.radius * node.scaleX;
				theta = 1.0 / nextCircleRaduis;
				maxTheta = 0;
				currentRoundLong = node.radius * node.scaleX
			}
			var thisAngle = 0;
			if (i < (nodeCount - _self.outCircleNodes)) {
				thisAngle = theta * node.radius * node.scaleX
			} else {
				nextCircleRaduis = innerCircleRaduis + _self.layerDistance + nextLayerNodeRaduis;
				thisAngle = 2 * Math.PI / _self.outCircleNodes
			}
			maxTheta += thisAngle;
			var posData = _self.newLayoutData();
			posData.finishx = nextCircleRaduis * 2.4 * Math.cos(maxTheta + Math.PI);
			posData.finishy = nextCircleRaduis * 2.4 * Math.sin(maxTheta + Math.PI);
			posData.xdistance = (1.0 / _self.intSteps) * (posData.finishx - node.x);
			posData.ydistance = (1.0 / _self.intSteps) * (posData.finishy - node.y);
			node.layoutData = posData
		}
		this.inited = true
	};
	LayerLayout.prototype.goAlgo = function() {
		var _self = this;
		var position = null;
		var nodes = _self.nodes;
		var length = nodes.length;
		for (var i = 0; i < length; i++) {
			var n = nodes[i];
			position = n.layoutData;
			if (position == null) {
				continue
			}
			if (_self.boolTransition) {
				var currentDistance = Math.abs(n.x - position.finishx);
				var nextDistance = Math.abs((n.x + position.xdistance) - position.finishx);
				if (nextDistance < currentDistance) {
					n.x += position.xdistance
				} else {
					n.x = position.finishx
				}
				currentDistance = Math.abs(n.y - position.finishy);
				nextDistance = Math.abs((n.y + position.ydistance) - position.finishy);
				if (nextDistance < currentDistance) {
					n.y += position.ydistance
				} else {
					n.y = position.finishy
				}
				if (n.x == position.finishx && n.y == position.finishy) {
					n.layoutData = null
				}
			} else {
				n.x = position.finishx;
				n.y = position.finishy;
				n.layoutData = null
			}
		}
	};
	var FRlayout = function(nodes, links) {
		this.nodes = nodes;
		this.links = links;
		this.AREA_MULTIPLICATOR = 10000;
		this.area = 800;
		this.gravity = 1.2;
		this.SPEED_DIVISOR = 800.0;
		this.speed = 10;
		this.inited = false
	};
	FRlayout.prototype.newLayoutData = function() {
		var layoutData = {
			dx: 0.0,
			dy: 0.0,
			old_dx: 0.0,
			old_dy: 0.0,
			freeze: 0.0
		};
		return layoutData
	};
	FRlayout.prototype.runLayout = function() {
		if (this.inited) {
			this.goAlgo()
		}
	};
	FRlayout.prototype.getConfig = function() {
		return [{
			'label': '区域大小',
			'area': 500
		}, {
			'label': '重力',
			'gravity': 2.0
		}]
	};
	FRlayout.prototype.resetConfig = function(layoutConfig) {
		var _self = this;
		if (layoutConfig) {
			this.area = Number(layoutConfig['area']) || 500;
			this.gravity = Number(layoutConfig['gravity']) || 1.5;
			this.nodes.forEach(function(n) {
				n.layoutData = _self.newLayoutData()
			})
		}
		this.inited = true
	};
	FRlayout.prototype.initAlgo = function() {
		var _self = this;
		_self.area = _self.nodes.length / 2;
		_self.nodes.forEach(function(n) {
			n.layoutData = _self.newLayoutData()
		});
		this.inited = true
	};
	FRlayout.prototype.goAlgo = function() {
		var _self = this;
		var nodes = _self.nodes;
		var nodeCount = nodes.length;
		var maxDisplace = Math.sqrt(_self.AREA_MULTIPLICATOR * _self.area) / 10.0;
		var k = Math.sqrt((_self.AREA_MULTIPLICATOR * _self.area) / (1.0 + nodeCount));
		nodes.forEach(function(N1, i) {
			N1.layoutData.dx = 0;
			N1.layoutData.dy = 0;
			nodes.forEach(function(N2, j) {
				if (i != j) {
					var xDist = N1.x - N2.x;
					var yDist = N1.y - N2.y;
					var dist = Math.sqrt(xDist * xDist + yDist * yDist);
					if (dist > 0) {
						var repulsiveF = k * k / dist;
						var layoutData = N1.layoutData;
						layoutData.dx += (xDist / dist * repulsiveF);
						layoutData.dy += (yDist / dist * repulsiveF)
					}
				}
			})
		});
		var links = _self.links;
		links.forEach(function(E) {
			var Nf = E.source;
			var Nt = E.target;
			var xDist = Nf.x - Nt.x;
			var yDist = Nf.y - Nt.y;
			var dist = Math.sqrt(xDist * xDist + yDist * yDist);
			var attractiveF = dist * dist / k;
			if (dist > 0) {
				var sourceLayoutData = Nf.layoutData;
				var targetLayoutData = Nt.layoutData;
				sourceLayoutData.dx -= (xDist / dist * attractiveF);
				sourceLayoutData.dy -= (yDist / dist * attractiveF);
				targetLayoutData.dx += (xDist / dist * attractiveF);
				targetLayoutData.dy += (yDist / dist * attractiveF)
			}
		});
		nodes.forEach(function(n) {
			var layoutData = n.layoutData;
			var d = Math.sqrt(n.x * n.x + n.y * n.y);
			var gf = 0.01 * k * _self.gravity * d;
			layoutData.dx -= gf * n.x / d;
			layoutData.dy -= gf * n.y / d;
			layoutData.dx *= _self.speed / _self.SPEED_DIVISOR;
			layoutData.dy *= _self.speed / _self.SPEED_DIVISOR;
			var dist = Math.sqrt(layoutData.dx * layoutData.dx + layoutData.dy * layoutData.dy);
			if (dist > 0) {
				var limitedDist = Math.min(maxDisplace * (_self.speed / _self.SPEED_DIVISOR), dist);
				n.x += (layoutData.dx / dist * limitedDist);
				n.y += (layoutData.dy / dist * limitedDist)
			}
		})
	};
	var FruchtermanReingoldLayout = function(nodes, links) {
		this.nodes = nodes;
		this.links = links;
		this.config = {
			autoArea: true,
			area: 1000,
			gravity: 3,
			speed: 0.08,
			iterations: 1000
		};
		this.maxDisplace = 10;
		this.k = 120.0;
		this.currentIter = 0;
		this.inited = false
	};
	FruchtermanReingoldLayout.prototype.getConfig = function() {
		var self = this;
		return [{
			'label': '重力',
			'gravity': 0.5
		}, {
			'label': '边长度',
			'k': self.k
		}, {
			'label': '收敛速度',
			'speed': 0.50
		}]
	};
	FruchtermanReingoldLayout.prototype.resetConfig = function(layoutConfig) {
		if (layoutConfig) {
			this.nodes.forEach(function(node) {
				node.fr_x = node.x;
				node.fr_y = node.y;
				node.fr = {
					dx: 0,
					dy: 0
				}
			});
			this.config.gravity = Number(layoutConfig['gravity']) || 0.5;
			this.config.speed = Number(layoutConfig['speed']) || 0.08;
			this.k = Number(layoutConfig['k']) || 120;
			this.currentIter = 0
		}
		this.inited = true
	};
	FruchtermanReingoldLayout.prototype.initAlgo = function() {
		var self = this;
		var nodesCount = this.nodes.length;
		self.nodes.forEach(function(node) {
			node.fr_x = node.x;
			node.fr_y = node.y;
			node.fr = {
				dx: 0,
				dy: 0
			}
		});
		self.config.area = self.config.autoArea ? (nodesCount * nodesCount) : self.config.area;
		self.maxDisplace = Math.sqrt(self.config.area) / 8;
		self.k = Math.sqrt(self.config.area / (1 + nodesCount));
		if (self.maxDisplace < 150) {
			self.maxDisplace = 150
		}
		if (self.k < 40) {
			self.k = 40
		}
		self.currentIter = 0;
		this.inited = true
	};
	FruchtermanReingoldLayout.prototype.runLayout = function() {
		if (this.currentIter > this.config.iterations) {
			return
		}
		if (this.inited) {
			this.goAlgo();
			this.currentIter++
		}
	};
	FruchtermanReingoldLayout.prototype.goAlgo = function() {
		var self = this;
		var nodes = self.nodes;
		var links = self.links;
		var nodesCount = self.nodes.length;
		for (var i = 0; i < nodesCount; i++) {
			var n = nodes[i];
			for (var j = 0; j < nodesCount; j++) {
				var n2 = nodes[j];
				if (n.id != n2.id) {
					var xDist = n.fr_x - n2.fr_x;
					var yDist = n.fr_y - n2.fr_y;
					var dist = Math.sqrt(xDist * xDist + yDist * yDist) + 0.01;
					if (dist > 0) {
						var repulsiveF = self.k * self.k / dist;
						n.fr.dx += xDist / dist * repulsiveF;
						n.fr.dy += yDist / dist * repulsiveF
					}
				}
			}
		};
		var edgesCount = links.length;
		for (i = 0; i < edgesCount; i++) {
			var link = links[i];
			var nSource = link.source;
			var nTarget = link.target;
			var xDist = nSource.fr_x - nTarget.fr_x;
			var yDist = nSource.fr_y - nTarget.fr_y;
			var dist = Math.sqrt(xDist * xDist + yDist * yDist) + 0.01;
			var attractiveF = dist * dist / self.k;
			if (dist > 0) {
				nSource.fr.dx -= xDist / dist * attractiveF;
				nSource.fr.dy -= yDist / dist * attractiveF;
				nTarget.fr.dx += xDist / dist * attractiveF;
				nTarget.fr.dy += yDist / dist * attractiveF
			}
		};
		for (var i = 0; i < nodesCount; i++) {
			var n = nodes[i];
			var d = Math.sqrt(n.fr_x * n.fr_x + n.fr_y * n.fr_y);
			var gf = 0.01 * self.k * self.config.gravity * d;
			n.fr.dx -= gf * n.fr_x / d;
			n.fr.dy -= gf * n.fr_y / d;
			n.fr.dx *= self.config.speed;
			n.fr.dy *= self.config.speed;
			if (!n.fixed) {
				var xDist = n.fr.dx;
				var yDist = n.fr.dy;
				dist = Math.sqrt(xDist * xDist + yDist * yDist);
				if (dist > 0) {
					var limitedDist = Math.min(self.maxDisplace * self.config.speed, dist);
					n.fr_x += xDist / dist * limitedDist;
					n.fr_y += yDist / dist * limitedDist
				}
			}
		}
		for (var i = 0; i < nodesCount; i++) {
			nodes[i].x = nodes[i].fr_x;
			nodes[i].y = nodes[i].fr_y
		}
	};
	var GirdLayout = function(nodes, links) {
		this.nodes = nodes;
		this.links = links;
		this.xOrigin = -1200;
		this.yOrigin = -1000;
		this.horizontalScale = 60;
		this.verticalScale = 60;
		this.horizontal = false;
		this.boolTransition = true;
		this.intSteps = 50;
		this.inited = false
	};
	GirdLayout.prototype.getConfig = function() {
		return [{
			'label': '水平间距',
			'horizontalScale': 100
		}, {
			'label': '垂直间距',
			'verticalScale': 100
		}]
	};
	GirdLayout.prototype.resetConfig = function(layoutConfig) {
		if (layoutConfig) {
			this.horizontalScale = Number(layoutConfig['horizontalScale']) || 100;
			this.verticalScale = Number(layoutConfig['verticalScale']) || 100;
			this.initAlgo()
		}
	};
	GirdLayout.prototype.newLayoutData = function() {
		var layoutData = {
			finishx: 0.0,
			finishy: 0.0,
			xdistance: 0.0,
			ydistance: 0.0
		};
		return layoutData
	};
	GirdLayout.prototype.runLayout = function() {
		if (this.inited) {
			this.goAlgo()
		}
	};
	GirdLayout.prototype.initAlgo = function() {
		var _self = this;
		var nodes = _self.nodes;
		var nodeCount = nodes.length;
		var xGridScales = Math.round(Math.sqrt(nodeCount)) + 1;
		var yGridScales = Math.round(Math.sqrt(nodeCount)) + 1;
		this.inited = true;
		nodes = nodes.sort(function(n1, n2) {
			var x = (n1.inLinks || []).length + (n1.outLinks || []).length;
			var y = (n2.inLinks || []).length + (n2.outLinks || []).length;
			if (x > y) {
				return -1
			} else if (x < y) {
				return 1
			} else {
				return 0
			}
		});
		var k = 0;
		for (var i = 0; i < xGridScales; i++) {
			for (var j = 0; j < yGridScales; j++) {
				if (k >= nodeCount) {
					continue
				}
				var tempX, tempY;
				if (_self.horizontal) {
					tempX = _self.xGridToScreen(i, j);
					tempY = _self.yGridToScreen(i, j)
				} else {
					tempX = _self.yGridToScreen(i, j);
					tempY = -_self.xGridToScreen(i, j)
				}
				var node = nodes[k];
				var posData = _self.newLayoutData();
				posData.finishx = tempX;
				posData.finishy = tempY;
				posData.xdistance = (1.0 / _self.intSteps) * (tempX - node.x);
				posData.ydistance = (1.0 / _self.intSteps) * (tempY - node.y);
				node.layoutData = posData;
				k++
			}
		}
	};
	GirdLayout.prototype.goAlgo = function() {
		var _self = this;
		var position = null;
		var nodes = _self.nodes;
		var length = nodes.length;
		for (var i = 0; i < length; i++) {
			var n = nodes[i];
			position = n.layoutData;
			if (position == null) {
				continue
			}
			if (_self.boolTransition) {
				var currentDistance = Math.abs(n.x - position.finishx);
				var nextDistance = Math.abs((n.x + position.xdistance) - position.finishx);
				if (nextDistance < currentDistance) {
					n.x += position.xdistance
				} else {
					n.x = position.finishx
				}
				currentDistance = Math.abs(n.y - position.finishy);
				nextDistance = Math.abs((n.y + position.ydistance) - position.finishy);
				if (nextDistance < currentDistance) {
					n.y += position.ydistance
				} else {
					n.y = position.finishy
				}
				if (n.x == position.finishx && n.y == position.finishy) {
					n.layoutData = null
				}
			} else {
				n.x = position.finishx;
				n.y = position.finishy;
				n.layoutData = null
			}
		}
	};
	GirdLayout.prototype.xGridToScreen = function(xg, yg) {
		return this.xOrigin + xg * this.horizontalScale
	};
	GirdLayout.prototype.yGridToScreen = function(xg, yg) {
		return this.yOrigin + yg * this.verticalScale
	};
	var KKLayout = function(_nodes, _links) {
		this.nodes = _nodes;
		this.links = _links;
		this.nodeIds = [];
		this.VECTOR_D1 = [];
		this.VECTOR_D2 = [];
		this.lij = [];
		this.kij = [];
		this.tempNodes = [];
		this.realSize = 3000.0;
		this.tempSize = 5.0;
		this.inited = false
	};
	KKLayout.prototype.getConfig = function() {
		var canvasWidth = this.setCanvasSize(this.nodes.length);
		return [{
			'label': '区域大小',
			'realSize': canvasWidth
		}]
	};
	KKLayout.prototype.resetConfig = function(layoutConfig) {
		if (layoutConfig) {
			this.realSize = Number(layoutConfig['realSize']) || 1000;
			this.initAlgo()
		}
	};
	KKLayout.prototype.runLayout = function() {
		var i = 0;
		while (i++ < 100 && this.inited) {
			this.goAlgo()
		}
	};
	KKLayout.prototype.initAlgo = function() {
		var _self = this;
		var nodes = _self.nodes;
		var nodeCount = nodes.length;
		this.inited = true;
		var L0 = _self.tempSize;
		_self.nodeIds = [];
		_self.tempNodes = [];
		_self.VECTOR_D1 = [];
		_self.VECTOR_D2 = [];
		_self.lij = [];
		_self.kij = [];
		nodes.forEach(function(node) {
			_self.nodeIds.push(node.id);
			_self.tempNodes.push({
				id: node.id,
				x: node.x / (_self.realSize / _self.tempSize),
				y: node.y / (_self.realSize / _self.tempSize)
			})
		});
		var lij = [nodeCount];
		var kij = [nodeCount];
		var dij = _self.shortPath(nodeCount);
		var max_dij = _self.getMaxDij(nodeCount, dij);
		_self.getKijLij(L0, max_dij, dij, kij, lij);
		var _VECTOR_D1 = [nodeCount];
		var _VECTOR_D2 = [nodeCount];
		_self.tempNodes.forEach(function(nodeM, i) {
			var myD1 = 0.0,
				myD2 = 0.0;
			_self.tempNodes.forEach(function(nodeN, j) {
				if (i != j) {
					var dx = nodeM.x - nodeN.x;
					var dy = nodeM.y - nodeN.y;
					var mi_dist = Math.sqrt(dx * dx + dy * dy);
					myD1 += kij[i][j] * (dx - lij[i][j] * dx / mi_dist);
					myD2 += kij[i][j] * (dy - lij[i][j] * dy / mi_dist)
				}
			});
			_VECTOR_D1[i] = myD1;
			_VECTOR_D2[i] = myD2
		});
		_self.VECTOR_D1 = _VECTOR_D1;
		_self.VECTOR_D2 = _VECTOR_D2;
		_self.lij = lij;
		_self.kij = kij
	};
	KKLayout.prototype.goAlgo = function() {
		var _self = this;
		var nodeCount = _self.tempNodes.length;
		var epsilon = 0.00000000001;
		var myD1 = 0.0,
			myD2 = 0.0;
		var A = 0.0,
			B = 0.0,
			C = 0.0;
		var delta_x, delta_y;
		var old_x, old_y, new_x, new_y;
		var m = 0;
		var max_delta = -1;
		for (var i = 0; i < nodeCount; i++) {
			var delta = (_self.VECTOR_D1[i] * _self.VECTOR_D1[i] + _self.VECTOR_D2[i] * _self.VECTOR_D2[i]);
			if (delta > max_delta) {
				m = i;
				max_delta = delta
			}
		}
		if (max_delta < epsilon) {
			return
		}
		var nodeM = _self.tempNodes[m];
		old_x = nodeM.x;
		old_y = nodeM.y;
		for (var i = 0; i < nodeCount; i++) {
			if (i == m) {
				continue
			}
			var nodeI = _self.tempNodes[i];
			var dx = old_x - nodeI.x;
			var dy = old_y - nodeI.y;
			var dist = Math.sqrt(dx * dx + dy * dy);
			var den = dist * (dx * dx + dy * dy);
			A += _self.kij[m][i] * (1.0 - _self.lij[m][i] * dy * dy / den);
			B += _self.kij[m][i] * (_self.lij[m][i] * dx * dy / den);
			C += _self.kij[m][i] * (1.0 - _self.lij[m][i] * dx * dx / den)
		}
		myD1 = _self.VECTOR_D1[m];
		myD2 = _self.VECTOR_D2[m];
		delta_y = (B * myD1 - myD2 * A) / (C * A - B * B);
		delta_x = -(myD1 + B * delta_y) / A;
		new_x = old_x + delta_x;
		new_y = old_y + delta_y;
		_self.VECTOR_D1[m] = _self.VECTOR_D2[m] = 0.0;
		for (var i = 0; i < nodeCount; i++) {
			if (i == m) {
				continue
			}
			var nodeI = _self.tempNodes[i];
			var old_dx = old_x - nodeI.x;
			var old_dy = old_y - nodeI.y;
			var old_mi_dist = Math.sqrt(old_dx * old_dx + old_dy * old_dy);
			var new_dx = new_x - nodeI.x;
			var new_dy = new_y - nodeI.y;
			var new_mi_dist = Math.sqrt(new_dx * new_dx + new_dy * new_dy);
			_self.VECTOR_D1[i] -= _self.kij[m][i] * (-old_dx + _self.lij[m][i] * old_dx / old_mi_dist);
			_self.VECTOR_D2[i] -= _self.kij[m][i] * (-old_dy + _self.lij[m][i] * old_dy / old_mi_dist);
			_self.VECTOR_D1[i] += _self.kij[m][i] * (-new_dx + _self.lij[m][i] * new_dx / new_mi_dist);
			_self.VECTOR_D2[i] += _self.kij[m][i] * (-new_dy + _self.lij[m][i] * new_dy / new_mi_dist);
			_self.VECTOR_D1[m] += _self.kij[m][i] * (new_dx - _self.lij[m][i] * new_dx / new_mi_dist);
			_self.VECTOR_D2[m] += _self.kij[m][i] * (new_dy - _self.lij[m][i] * new_dy / new_mi_dist)
		}
		nodeM.x = new_x;
		nodeM.y = new_y;
		var index = _self.nodeIds.indexOf(nodeM.id);
		var node = _self.nodes[index];
		node.x = new_x * (_self.realSize / _self.tempSize);
		node.y = new_y * (_self.realSize / _self.tempSize)
	};
	KKLayout.prototype.getMaxDij = function(nodeCount, dij) {
		var max_dij = 0;
		for (var i = 0; i < nodeCount; i++) {
			for (var j = i + 1; j < nodeCount; j++) {
				if (dij[i][j] == Infinity) {
					continue
				}
				if (dij[i][j] > max_dij) {
					max_dij = dij[i][j]
				}
			}
		}
		for (var i = 0; i < nodeCount; i++) {
			for (var j = 0; j < nodeCount; j++) {
				if (dij[i][j] == Infinity) {
					dij[i][j] = max_dij
				}
			}
		}
		return max_dij
	};
	KKLayout.prototype.getKijLij = function(L0, max_dij, dij, kij, lij) {
		var L = L0 / max_dij;
		var nodeCount = this.tempNodes.length;
		for (var i = 0; i < nodeCount; i++) {
			kij[i] = [nodeCount];
			lij[i] = [nodeCount];
			for (var j = 0; j < nodeCount; j++) {
				var tmp = dij[i][j] * dij[i][j];
				if (i == j) {
					continue
				}
				kij[i][j] = Math.pow(nodeCount, 2) * 1.0 / tmp;
				lij[i][j] = L * dij[i][j]
			}
		}
	};
	KKLayout.prototype.shortPath = function(nodeCount) {
		var _self = this;
		var dij = [nodeCount];
		for (var i = 0; i < nodeCount; i++) {
			dij[i] = [nodeCount];
			for (var j = 0; j < nodeCount; j++) {
				if (i == j) {
					dij[i][j] = 0;
					continue
				}
				dij[i][j] = Infinity
			}
		}
		_self.links.forEach(function(link) {
			var i = _self.nodeIds.indexOf(link.source.id);
			var j = _self.nodeIds.indexOf(link.target.id);
			dij[i][j] = 1;
			dij[j][i] = 1
		});
		for (var k = 0; k < nodeCount; k++) {
			for (var i = 0; i < nodeCount; i++) {
				for (var j = i + 1; j < nodeCount; j++) {
					var temp = dij[i][k] + dij[k][j];
					if (temp < dij[i][j]) {
						dij[i][j] = temp;
						dij[j][i] = temp
					}
				}
			}
		}
		return dij
	};
	KKLayout.prototype.setCanvasSize = function(nodeCount) {
		var maxWidth = 8000;
		var minWidth = 1500;
		var widthRange = maxWidth - minWidth;
		var shiftLog = 5;
		var maxLog = Math.log(800 + shiftLog);
		var minLog = Math.log(shiftLog);
		var logRange = maxLog - minLog;
		var canvasWidth = Math.round(((Math.log((Math.min(nodeCount, 8000) / 10) + shiftLog) - minLog) * widthRange / logRange + minWidth));
		return canvasWidth
	};
	var LayeredLayout = function(nodes, links) {
		this.nodes = nodes;
		this.links = links;
		this.layerDistance = 80;
		this.ajustSize = true;
		this.boolTransition = true;
		this.intSteps = 50;
		this.inited = false
	};
	LayeredLayout.prototype.getConfig = function() {
		return [{
			'label': '层间距',
			'layerDistance': 80
		}]
	};
	LayeredLayout.prototype.resetConfig = function(layoutConfig) {
		if (layoutConfig) {
			this.layerDistance = Number(layoutConfig['layerDistance']) || 100;
			this.initAlgo()
		}
	};
	LayeredLayout.prototype.runLayout = function() {
		if (this.inited) {
			this.goAlgo()
		}
	};
	LayeredLayout.prototype.newLayoutData = function() {
		var layoutData = {
			finishx: 0.0,
			finishy: 0.0,
			xdistance: 0.0,
			ydistance: 0.0
		};
		return layoutData
	};
	LayeredLayout.prototype.initAlgo = function() {
		var _self = this;
		var nodes = _self.nodes;
		var nodeCount = nodes.length;
		var innerCircleRaduis = 0,
			nextLayerRoundLong = 0,
			currentRoundLong = 0;
		var maxTheta = 0,
			theta = 0;
		this.inited = true;
		nodes = nodes.sort(function(n1, n2) {
			var x = (n1.inLinks || []).length + (n1.outLinks || []).length;
			var y = (n2.inLinks || []).length + (n2.outLinks || []).length;
			if (x < y) {
				return -1
			} else if (x > y) {
				return 1
			} else {
				return 0
			}
		});
		var startValue = _self.getValue(nodes[0]);
		var startX = nodes[0].x;
		var startY = nodes[0].y;
		var currentValue = startValue;
		var isFirstlayer = true;
		var shiftFirstlayer = 0;
		var currentOrbit = [];
		nodes.forEach(function(n) {
			if (_self.getValue(n) != currentValue) {
				if (isFirstlayer && currentOrbit.length > 1) {
					shiftFirstlayer = 1
				}
				isFirstlayer = false;
				_self.renderOrbit(currentOrbit, startX, startY, shiftFirstlayer + (currentValue - startValue));
				currentOrbit = [];
				currentValue = _self.getValue(n)
			}
			currentOrbit.push(n)
		});
		if (currentOrbit.length > 0) {
			_self.renderOrbit(currentOrbit, startX, startY, shiftFirstlayer + (currentValue - startValue))
		}
	};
	LayeredLayout.prototype.getValue = function(node) {
		return (node.inLinks || []).length + (node.outLinks || []).length
	};
	LayeredLayout.prototype.goAlgo = function() {
		var _self = this;
		var position = null;
		var nodes = _self.nodes;
		var length = nodes.length;
		for (var i = 0; i < length; i++) {
			var n = nodes[i];
			position = n.layoutData;
			if (position == null) {
				continue
			}
			if (_self.boolTransition) {
				var currentDistance = Math.abs(n.x - position.finishx);
				var nextDistance = Math.abs((n.x + position.xdistance) - position.finishx);
				if (nextDistance < currentDistance) {
					n.x += position.xdistance
				} else {
					n.x = position.finishx
				}
				currentDistance = Math.abs(n.y - position.finishy);
				nextDistance = Math.abs((n.y + position.ydistance) - position.finishy);
				if (nextDistance < currentDistance) {
					n.y += position.ydistance
				} else {
					n.y = position.finishy
				}
				if (n.x == position.finishx && n.y == position.finishy) {
					n.layoutData = null
				}
			} else {
				n.x = position.finishx;
				n.y = position.finishy;
				n.layoutData = null
			}
		}
	};
	LayeredLayout.prototype.renderOrbit = function(currentOrbit, startX, startY, radius) {
		var _self = this;
		if (_self.ajustSize) {
			let length = 0;
			currentOrbit.forEach(function(n) {
				length += n.radius
			});
			var currentAngle = 0;
			var shift = 360 / length;
			currentOrbit.forEach(function(o, i) {
				currentAngle += (shift * o.radius) / 2;
				var noise = 0;
				if (i % 3 == 1) {
					noise = o.radius * (-1)
				}
				if (i % 3 == 2) {
					noise = o.radius
				}
				var x = startX + ((_self.layerDistance * radius) + noise) * Math.cos(currentAngle * (Math.PI / 180));
				var y = startY + ((_self.layerDistance * radius) + noise) * Math.sin(currentAngle * (Math.PI / 180));
				currentAngle += (shift * o.radius) / 2;
				var posData = _self.newLayoutData();
				posData.finishx = x;
				posData.finishy = y;
				posData.xdistance = (1.0 / _self.intSteps) * (x - o.x);
				posData.ydistance = (1.0 / _self.intSteps) * (y - o.y);
				o.layoutData = posData
			})
		} else {
			var currentAngle = 0;
			var shift = 360 / currentOrbit.length;
			currentOrbit.forEach(function(o) {
				var x = startX + (_self.layerDistance * (radius) * Math.cos(currentAngle * (Math.PI / 180)));
				var y = startY + (_self.layerDistance * (radius) * Math.sin(currentAngle * (Math.PI / 180)));
				var posData = _self.newLayoutData();
				posData.finishx = x;
				posData.finishy = y;
				posData.xdistance = (1.0 / _self.intSteps) * (x - o.x);
				posData.ydistance = (1.0 / _self.intSteps) * (y - o.y);
				o.layoutData = posData;
				currentAngle += shift
			})
		}
	};
	var ConcentricLayout = function(nodes, links) {
		this.nodes = nodes;
		this.links = links;
		this.defaults = {
			startAngle: Math.PI,
			clockwise: true,
			equidistant: false,
			avoidOverlap: true,
			minNodeSpacing: 10,
			maxNodeSize: 50,
			levelWidth: 1
		};
		this.boolTransition = true;
		this.intSteps = 50;
		this.inited = false
	};
	ConcentricLayout.prototype.getConfig = function() {
		return [{
			'label': '节点大小',
			'maxNodeSize': 50
		}, {
			'label': '分层系数',
			'levelWidth': 1
		}]
	};
	ConcentricLayout.prototype.resetConfig = function(layoutConfig) {
		if (layoutConfig) {
			this.defaults.maxNodeSize = Number(layoutConfig['maxNodeSize']) || 50;
			this.defaults.levelWidth = Number(layoutConfig['levelWidth']) || 1
		}
		this.initAlgo()
	};
	ConcentricLayout.prototype.runLayout = function() {
		if (this.inited) {
			this.goAlgo()
		}
	};
	ConcentricLayout.prototype.initAlgo = function() {
		var self = this;
		let options = self.defaults;
		let nodes = self.nodes;
		var bb = {
			x1: 0,
			y1: 0,
			w: options.maxNodeSize * 5,
			h: options.maxNodeSize * 5
		};
		let center = {
			x: bb.x1 + bb.w / 2,
			y: bb.y1 + bb.h / 2
		};
		let nodeValues = [];
		for (let i = 0; i < nodes.length; i++) {
			let node = nodes[i];
			let value;
			value = (node.inLinks || []).length + (node.outLinks || []).length;
			nodeValues.push({
				value: value,
				node: node
			})
		}
		nodeValues.sort(function(a, b) {
			return b.value - a.value
		});
		let levelWidth = options.levelWidth;
		let levels = [
			[]
		];
		let currentLevel = levels[0];
		for (let i = 0; i < nodeValues.length; i++) {
			let val = nodeValues[i];
			if (currentLevel.length > 0) {
				let diff = Math.abs(currentLevel[0].value - val.value);
				if (diff >= levelWidth) {
					currentLevel = [];
					levels.push(currentLevel)
				}
			}
			currentLevel.push(val)
		}
		let minDist = options.maxNodeSize + options.minNodeSpacing;
		if (options.avoidOverlap) {
			let firstLvlHasMulti = levels.length > 0 && levels[0].length > 1;
			let maxR = (Math.min(bb.w, bb.h) / 2 - minDist);
			let rStep = maxR / (levels.length + firstLvlHasMulti ? 1 : 0);
			minDist = Math.min(minDist, rStep)
		}
		let r = 0;
		for (let i = 0; i < levels.length; i++) {
			let level = levels[i];
			let sweep = 2 * Math.PI - 2 * Math.PI / level.length;
			let dTheta = level.dTheta = sweep / (Math.max(1, level.length - 1));
			if (level.length > 1 && options.avoidOverlap) {
				let dcos = Math.cos(dTheta) - Math.cos(0);
				let dsin = Math.sin(dTheta) - Math.sin(0);
				let rMin = Math.sqrt(minDist * minDist / (dcos * dcos + dsin * dsin));
				r = Math.max(rMin, r)
			}
			level.r = r;
			r += minDist
		}
		if (options.equidistant) {
			let rDeltaMax = 0;
			let r = 0;
			for (let i = 0; i < levels.length; i++) {
				let level = levels[i];
				let rDelta = level.r - r;
				rDeltaMax = Math.max(rDeltaMax, rDelta)
			}
			r = 0;
			for (let i = 0; i < levels.length; i++) {
				let level = levels[i];
				if (i === 0) {
					r = level.r
				}
				level.r = r;
				r += rDeltaMax
			}
		}
		for (let i = 0; i < levels.length; i++) {
			let level = levels[i];
			let dTheta = level.dTheta;
			let r = level.r;
			for (let j = 0; j < level.length; j++) {
				let val = level[j];
				let theta = options.startAngle + (self.clockwise ? 1 : -1) * dTheta * j;
				var x = center.x + r * Math.cos(theta);
				var y = center.y + r * Math.sin(theta);
				var posData = self.newLayoutData();
				posData.finishx = x;
				posData.finishy = y;
				posData.xdistance = (1.0 / self.intSteps) * (x - val.node.x);
				posData.ydistance = (1.0 / self.intSteps) * (y - val.node.y);
				val.node.layoutData = posData
			}
		}
		this.inited = true
	};
	ConcentricLayout.prototype.newLayoutData = function() {
		var layoutData = {
			finishx: 0.0,
			finishy: 0.0,
			xdistance: 0.0,
			ydistance: 0.0
		};
		return layoutData
	};
	ConcentricLayout.prototype.goAlgo = function() {
		var _self = this;
		var position = null;
		var nodes = _self.nodes;
		var length = nodes.length;
		for (var i = 0; i < length; i++) {
			var n = nodes[i];
			position = n.layoutData;
			if (position == null) {
				continue
			}
			if (_self.boolTransition) {
				var currentDistance = Math.abs(n.x - position.finishx);
				var nextDistance = Math.abs((n.x + position.xdistance) - position.finishx);
				if (nextDistance < currentDistance) {
					n.x += position.xdistance
				} else {
					n.x = position.finishx
				}
				currentDistance = Math.abs(n.y - position.finishy);
				nextDistance = Math.abs((n.y + position.ydistance) - position.finishy);
				if (nextDistance < currentDistance) {
					n.y += position.ydistance
				} else {
					n.y = position.finishy
				}
				if (n.x == position.finishx && n.y == position.finishy) {
					n.layoutData = null
				}
			} else {
				n.x = position.finishx;
				n.y = position.finishy;
				n.layoutData = null
			}
		}
	};
	var RotateLayout = function(nodes, links, angle) {
		this.nodes = nodes;
		this.links = links;
		this.angle = angle || 10;
		this.direction = 'sn';
		this.boolTransition = true;
		this.intSteps = 30;
		this.inited = false
	};
	RotateLayout.prototype.getConfig = function() {
		return [{
			'label': '旋转角度',
			"angle": 10
		}, {
			'label': '旋转方向',
			'direction': [{
				label: '顺时针',
				value: 'sn'
			}, {
				label: '逆时针',
				value: 'ns'
			}]
		}]
	};
	RotateLayout.prototype.resetConfig = function(layoutConfig) {
		if (layoutConfig) {
			this.angle = Number(layoutConfig['angle']) || 10;
			this.direction = layoutConfig['direction'] || 'sn'
		}
		if (this.direction == 'ns') {
			this.angle = Math.abs(this.angle)
		} else {
			this.angle = -Math.abs(this.angle)
		}
		this.initAlgo()
	};
	RotateLayout.prototype.newLayoutData = function() {
		var layoutData = {
			finishx: 0.0,
			finishy: 0.0,
			xdistance: 0.0,
			ydistance: 0.0
		};
		return layoutData
	};
	RotateLayout.prototype.runLayout = function() {
		if (this.inited) {
			this.goAlgo()
		}
	};
	RotateLayout.prototype.initAlgo = function() {
		var self = this;
		this.inited = true;
		var sin = Math.sin(-self.angle * Math.PI / 180);
		var cos = Math.cos(-self.angle * Math.PI / 180);
		var px = 0;
		var py = 0;
		self.nodes.forEach(function(n) {
			var dx = n.x - px;
			var dy = n.y - py;
			var tempX = (px + dx * cos - dy * sin);
			var tempY = (py + dy * cos + dx * sin);
			var posData = self.newLayoutData();
			posData.finishx = tempX;
			posData.finishy = tempY;
			posData.xdistance = (1.0 / self.intSteps) * (tempX - n.x);
			posData.ydistance = (1.0 / self.intSteps) * (tempY - n.y);
			n.layoutData = posData
		})
	};
	RotateLayout.prototype.goAlgo = function() {
		var _self = this;
		var position = null;
		var nodes = _self.nodes;
		var length = nodes.length;
		for (var i = 0; i < length; i++) {
			var n = nodes[i];
			position = n.layoutData;
			if (position == null) {
				continue
			}
			if (_self.boolTransition) {
				var currentDistance = Math.abs(n.x - position.finishx);
				var nextDistance = Math.abs((n.x + position.xdistance) - position.finishx);
				if (nextDistance < currentDistance) {
					n.x += position.xdistance
				} else {
					n.x = position.finishx
				}
				currentDistance = Math.abs(n.y - position.finishy);
				nextDistance = Math.abs((n.y + position.ydistance) - position.finishy);
				if (nextDistance < currentDistance) {
					n.y += position.ydistance
				} else {
					n.y = position.finishy
				}
				if (n.x == position.finishx && n.y == position.finishy) {
					n.layoutData = null
				}
			} else {
				n.x = position.finishx;
				n.y = position.finishy;
				n.layoutData = null
			}
		}
	};
	var ScaleLayout = function(nodes, links, scale) {
		this.nodes = nodes;
		this.links = links;
		this.scale = scale || 1;
		this.boolTransition = true;
		this.intSteps = 30;
		this.inited = false
	};
	ScaleLayout.prototype.getConfig = function() {
		return [{
			'label': '缩放比例',
			'scale': 1.1
		}]
	};
	ScaleLayout.prototype.resetConfig = function(layoutConfig) {
		if (layoutConfig) {
			this.scale = Number(layoutConfig['scale']) || 1.1
		}
		this.initAlgo()
	};
	ScaleLayout.prototype.newLayoutData = function() {
		var layoutData = {
			finishx: 0.0,
			finishy: 0.0,
			xdistance: 0.0,
			ydistance: 0.0
		};
		return layoutData
	};
	ScaleLayout.prototype.runLayout = function() {
		if (this.inited) {
			this.goAlgo()
		}
	};
	ScaleLayout.prototype.initAlgo = function() {
		var self = this;
		var nodeCount = self.nodes.length;
		var xMean = 0,
			yMean = 0;
		this.inited = true;
		self.nodes.forEach(function(n) {
			xMean += n.x;
			yMean += n.y
		});
		xMean /= nodeCount;
		yMean /= nodeCount;
		self.nodes.forEach(function(n) {
			var dx = (n.x - xMean) * self.scale;
			var dy = (n.y - yMean) * self.scale;
			var tempX = xMean + dx;
			var tempY = yMean + dy;
			var posData = self.newLayoutData();
			posData.finishx = tempX;
			posData.finishy = tempY;
			posData.xdistance = (1.0 / self.intSteps) * (tempX - n.x);
			posData.ydistance = (1.0 / self.intSteps) * (tempY - n.y);
			n.layoutData = posData
		})
	};
	ScaleLayout.prototype.goAlgo = function() {
		var _self = this;
		var position = null;
		var nodes = _self.nodes;
		var length = nodes.length;
		for (var i = 0; i < length; i++) {
			var n = nodes[i];
			position = n.layoutData;
			if (position == null) {
				continue
			}
			if (_self.boolTransition) {
				var currentDistance = Math.abs(n.x - position.finishx);
				var nextDistance = Math.abs((n.x + position.xdistance) - position.finishx);
				if (nextDistance < currentDistance) {
					n.x += position.xdistance
				} else {
					n.x = position.finishx
				}
				currentDistance = Math.abs(n.y - position.finishy);
				nextDistance = Math.abs((n.y + position.ydistance) - position.finishy);
				if (nextDistance < currentDistance) {
					n.y += position.ydistance
				} else {
					n.y = position.finishy
				}
				if (n.x == position.finishx && n.y == position.finishy) {
					n.layoutData = null
				}
			} else {
				n.x = position.finishx;
				n.y = position.finishy;
				n.layoutData = null
			}
		}
	};
	var SpringLayout2 = function(nodes, links) {
		this.nodes = nodes;
		this.links = links;
		this.stretch = 0.5;
		this.repulsion_range_sq = 2000;
		this.force_multiplier = 0.02;
		this.inited = false
	};
	SpringLayout2.prototype.newLayoutData = function() {
		var layoutData = {
			edgedx: 0.0,
			edgedy: 0.0,
			repulsiondx: 0.0,
			repulsiondy: 0.0,
			dx: 0.0,
			dy: 0.0
		};
		return layoutData
	};
	SpringLayout2.prototype.getConfig = function() {
		return [{
			'label': '区域大小',
			'repulsion': 1000000
		}, {
			'label': '边长度',
			'stretch': 0.015
		}, {
			'label': '收敛系数',
			'force': 10.0
		}]
	};
	SpringLayout2.prototype.resetConfig = function(layoutConfig) {
		if (layoutConfig) {
			this.stretch = Number(layoutConfig['stretch']) || 0.015;
			this.repulsion_range_sq = Number(layoutConfig['repulsion']) || 1000000;
			this.force_multiplier = Number(layoutConfig['force']) || 10
		}
		this.initAlgo()
	};
	SpringLayout2.prototype.runLayout = function() {
		if (this.inited) {
			this.goAlgo()
		}
	};
	SpringLayout2.prototype.initAlgo = function() {
		var _self = this;
		_self.nodes.forEach(function(n) {
			n.layoutData = _self.newLayoutData()
		});
		this.inited = true
	};
	SpringLayout2.prototype.goAlgo = function() {
		var _self = this;
		_self.nodes.forEach(function(n) {
			var svd = n.layoutData;
			svd.dx /= 4;
			svd.dy /= 4;
			svd.edgedx = svd.edgedy = 0;
			svd.repulsiondx = svd.repulsiondy = 0
		});
		_self.relaxEdges();
		_self.calculateRepulsion();
		_self.moveNodes()
	};
	SpringLayout2.prototype.relaxEdges = function() {
		var _self = this;
		_self.links.forEach(function(link) {
			var node1 = link.source;
			var node2 = link.target;
			var vx = node1.x - node2.x;
			var vy = node1.y - node2.y;
			var len = Math.sqrt(vx * vx + vy * vy);
			len = (len == 0) ? 0.0001 : len;
			var f = _self.force_multiplier * (1 - len) / len;
			f = f * Math.pow(_self.stretch, 2);
			var dx = f * vx;
			var dy = f * vy;
			var v1D = node1.layoutData;
			var v2D = node2.layoutData;
			v1D.edgedx += dx;
			v1D.edgedy += dy;
			v2D.edgedx += -dx;
			v2D.edgedy += -dy
		})
	};
	SpringLayout2.prototype.calculateRepulsion = function() {
		var _self = this;
		_self.nodes.forEach(function(node) {
			var dx = 0,
				dy = 0;
			_self.nodes.forEach(function(n) {
				if (node.id != n.id) {
					var vx = node.x - n.x;
					var vy = node.y - n.y;
					var distanceSq = vx * vx + vy * vy;
					if (distanceSq == 0) {
						dx += Math.random();
						dy += Math.random()
					} else if (distanceSq < _self.repulsion_range_sq) {
						var factor = 1;
						dx += factor * vx / distanceSq;
						dy += factor * vy / distanceSq
					}
				}
			});
			var dlen = dx * dx + dy * dy;
			if (dlen > 0) {
				dlen = Math.sqrt(dlen) / 2;
				var layoutData = node.layoutData;
				layoutData.repulsiondx += dx / dlen;
				layoutData.repulsiondy += dy / dlen
			}
		})
	};
	SpringLayout2.prototype.moveNodes = function() {
		var _self = this;
		_self.nodes.forEach(function(node) {
			var vd = node.layoutData;
			vd.dx += vd.repulsiondx + vd.edgedx;
			vd.dy += vd.repulsiondy + vd.edgedy;
			node.x += Math.max(-5, Math.min(5, vd.dx));
			node.y += Math.max(-5, Math.min(5, vd.dy))
		})
	};
	var SphereLayout = function(nodes, links, radius) {
		this.nodes = nodes;
		this.links = links;
		this.radius = radius || 800;
		this.boolTransition = true;
		this.intSteps = 30;
		this.inited = false
	};
	SphereLayout.prototype.newLayoutData = function() {
		var layoutData = {
			finishx: 0.0,
			finishy: 0.0,
			xdistance: 0.0,
			ydistance: 0.0
		};
		return layoutData
	};
	SphereLayout.prototype.getConfig = function() {
		return [{
			'label': '半径',
			'radius': 500
		}]
	};
	SphereLayout.prototype.resetConfig = function(layoutConfig) {
		if (layoutConfig) {
			this.radius = Number(layoutConfig['radius']) || 500
		}
		this.initAlgo()
	};
	SphereLayout.prototype.runLayout = function() {
		if (this.inited) {
			this.goAlgo()
		}
	};
	SphereLayout.prototype.initAlgo = function() {
		var self = this;
		var nodeCount = self.nodes.length;
		this.inited = true;
		var area = 0;
		self.nodes.forEach(function(n, i) {
			var phi = Math.acos(-1 + (2 * i) / nodeCount);
			var theta = Math.sqrt(nodeCount * Math.PI) * phi;
			var sinPhiRadius = Math.sin(phi) * self.radius;
			var tempX = sinPhiRadius * Math.sin(theta);
			var tempY = Math.cos(phi) * self.radius;
			var posData = self.newLayoutData();
			posData.finishx = tempX;
			posData.finishy = tempY;
			posData.xdistance = (1.0 / self.intSteps) * (tempX - n.x);
			posData.ydistance = (1.0 / self.intSteps) * (tempY - n.y);
			n.layoutData = posData
		})
	};
	SphereLayout.prototype.goAlgo = function() {
		var _self = this;
		var position = null;
		var nodes = _self.nodes;
		var length = nodes.length;
		for (var i = 0; i < length; i++) {
			var n = nodes[i];
			position = n.layoutData;
			if (position == null) {
				continue
			}
			if (_self.boolTransition) {
				var currentDistance = Math.abs(n.x - position.finishx);
				var nextDistance = Math.abs((n.x + position.xdistance) - position.finishx);
				if (nextDistance < currentDistance) {
					n.x += position.xdistance
				} else {
					n.x = position.finishx
				}
				currentDistance = Math.abs(n.y - position.finishy);
				nextDistance = Math.abs((n.y + position.ydistance) - position.finishy);
				if (nextDistance < currentDistance) {
					n.y += position.ydistance
				} else {
					n.y = position.finishy
				}
				if (n.x == position.finishx && n.y == position.finishy) {
					n.layoutData = null
				}
			} else {
				n.x = position.finishx;
				n.y = position.finishy;
				n.layoutData = null
			}
		}
	};
	var TreeLayout = function(nodes, links) {
		this.nodes = nodes;
		this.links = links;
		this.nodeIds = [];
		this.nodeNeighbers = [];
		this.distX = 80;
		this.distY = 80;
		this.currentX = 0;
		this.currentY = 0;
		this.direction = 'UD';
		this.boolTransition = true;
		this.intSteps = 50;
		this.hasCycle = false;
		this.inited = false
	};
	TreeLayout.prototype.getConfig = function() {
		return [{
			'label': '点间距',
			'distX': 80
		}, {
			'label': '层间距',
			'distY': 120
		}, {
			'label': '排列方向',
			'direction': [{
				label: '上下',
				value: 'UD'
			}, {
				label: '下上',
				value: 'DU'
			}, {
				label: '左右',
				value: 'LR'
			}, {
				label: '右左',
				value: 'RL'
			}]
		}]
	};
	TreeLayout.prototype.resetConfig = function(layoutConfig) {
		if (layoutConfig) {
			this.distX = Number(layoutConfig['distX']) || 100;
			this.distY = Number(layoutConfig['distY']) || 120;
			this.direction = layoutConfig['direction'] || 'UD'
		}
		this.nodeIds = [];
		this.nodeNeighbers = [];
		this.initAlgo()
	};
	TreeLayout.prototype.initAlgo = function() {
		var _self = this;
		_self.nodes.forEach(function(node) {
			_self.checkHasCycle(node, []);
			_self.nodeIds.push(node.id);
			var neighbers = _self.initNodeNeighbers(node);
			_self.nodeNeighbers.push(neighbers)
		});
		_self.buildTree();
		this.inited = true
	};
	TreeLayout.prototype.initNodeNeighbers = function(node) {
		var _self = this;
		var nodeNeighbers = [];
		var outLinks = node.outLinks || [];
		outLinks.forEach(function(link) {
			var target = link.target;
			var source = link.source;
			if (source.id != target.id) {
				var index = _self.nodeIds.indexOf(target.id);
				var childNodes = _self.nodeNeighbers[index] || [];
				var childNodeIds = [];
				childNodes.forEach(function(n) {
					childNodeIds.push(n.id)
				});
				if (childNodeIds.indexOf(node.id) == -1) {
					nodeNeighbers.push(target)
				}
			}
		});
		return nodeNeighbers
	};
	TreeLayout.prototype.runLayout = function() {
		if (!this.hasCycle && this.inited) {
			this.goAlgo()
		}
	};
	TreeLayout.prototype.newLayoutData = function() {
		var layoutData = {
			finishx: 0.0,
			finishy: 0.0,
			xdistance: 0.0,
			ydistance: 0.0
		};
		return layoutData
	};
	TreeLayout.prototype.buildTree = function() {
		var _self = this;
		var roots = _self.getRoots();
		if (roots.length > 0) {
			_self.calculateRootsX(roots);
			roots.forEach(function(node) {
				_self.calculateNodeX(node);
				_self.currentX += node.sizeT / 2 + _self.distX;
				_self.buildNodeTree(node, _self.currentX)
			})
		}
	};
	TreeLayout.prototype.getRoots = function() {
		var _self = this;
		var roots = [];
		_self.nodes.forEach(function(node) {
			if ((node.inLinks || []).length == 0) {
				roots.push(node)
			}
		});
		return roots
	};
	TreeLayout.prototype.calculateRootsX = function(roots) {
		var _self = this;
		var size = 0;
		roots.forEach(function(node) {
			var childNodes = _self.getSuccessors(node);
			var childrenNum = childNodes.length;
			if (childrenNum != 0) {
				childNodes.forEach(function(node) {
					size += _self.calculateNodeX(node) + _self.distX
				})
			}
			size = Math.max(0, size - _self.distX);
			node.sizeT = size
		});
		return size
	};
	TreeLayout.prototype.calculateNodeX = function(node) {
		var _self = this;
		var size = 0;
		var childNodes = _self.getSuccessors(node);
		var childrenNum = childNodes.length;
		if (childrenNum != 0) {
			childNodes.forEach(function(node) {
				size += _self.calculateNodeX(node) + _self.distX
			})
		}
		size = Math.max(0, size - _self.distX);
		node.sizeT = size;
		return size
	};
	TreeLayout.prototype.buildNodeTree = function(node, x) {
		var _self = this;
		_self.currentY += _self.distY;
		_self.currentX = x;
		_self.setCurrentPositionFor(node);
		var sizeXofCurrent = node.sizeT;
		var lastX = x - sizeXofCurrent / 2;
		var sizeXofChild;
		var startXofChild;
		var childNodes = _self.getSuccessors(node);
		childNodes.forEach(function(n) {
			sizeXofChild = n.sizeT;
			startXofChild = lastX + sizeXofChild / 2;
			_self.buildNodeTree(n, startXofChild);
			lastX = lastX + sizeXofChild + _self.distX
		});
		_self.currentY -= _self.distY
	};
	TreeLayout.prototype.setCurrentPositionFor = function(node) {
		var _self = this;
		var x = _self.currentX;
		var y = _self.currentY;
		var tempx = x;
		if (_self.direction == 'DU') {
			y = -y
		} else if (_self.direction == 'LR') {
			x = y;
			y = tempx
		} else if (_self.direction == 'RL') {
			x = -y;
			y = tempx
		}
		var posData = _self.newLayoutData();
		posData.finishx = x;
		posData.finishy = y;
		posData.xdistance = (1.0 / _self.intSteps) * (x - node.x);
		posData.ydistance = (1.0 / _self.intSteps) * (y - node.y);
		node.layoutData = posData
	};
	TreeLayout.prototype.getSuccessors = function(node) {
		var _self = this;
		var index = _self.nodeIds.indexOf(node.id);
		var childNodes = _self.nodeNeighbers[index];
		return childNodes
	};
	TreeLayout.prototype.goAlgo = function() {
		var _self = this;
		var position = null;
		var nodes = _self.nodes;
		var length = nodes.length;
		for (var i = 0; i < length; i++) {
			var n = nodes[i];
			position = n.layoutData;
			if (position == null) {
				continue
			}
			if (_self.boolTransition) {
				var currentDistance = Math.abs(n.x - position.finishx);
				var nextDistance = Math.abs((n.x + position.xdistance) - position.finishx);
				if (nextDistance < currentDistance) {
					n.x += position.xdistance
				} else {
					n.x = position.finishx
				}
				currentDistance = Math.abs(n.y - position.finishy);
				nextDistance = Math.abs((n.y + position.ydistance) - position.finishy);
				if (nextDistance < currentDistance) {
					n.y += position.ydistance
				} else {
					n.y = position.finishy
				}
				if (n.x == position.finishx && n.y == position.finishy) {
					n.layoutData = null
				}
			} else {
				n.x = position.finishx;
				n.y = position.finishy;
				n.layoutData = null
			}
		}
	};
	TreeLayout.prototype.checkHasCycle = function(node, pathNodes) {
		var _self = this;
		(node.outLinks || []).forEach(function(_link) {
			var target = _link.target;
			if (node.id == target.id || pathNodes.indexOf(target.id) != -1) {
				_self.hasCycle = true;
				return
			}
			pathNodes.push(target.id);
			_self.checkHasCycle(target, pathNodes)
		})
	};
	var BalloonLayout = function(nodes, links) {
		this.nodes = nodes;
		this.links = links;
		this.nodeIds = [];
		this.nodeNeighbers = [];
		this.distX = 50;
		this.distY = 50;
		this.currentX = 0;
		this.currentY = 0;
		this.radius = 1000;
		this.boolTransition = true;
		this.intSteps = 50;
		this.hasCycle = false;
		this.inited = false
	};
	BalloonLayout.prototype.getConfig = function() {
		return [{
			'label': '区域大小',
			'radius': 1000
		}]
	};
	BalloonLayout.prototype.resetConfig = function(layoutConfig) {
		if (layoutConfig) {
			this.radius = Number(layoutConfig['radius']) || 1000
		}
		this.initAlgo()
	};
	BalloonLayout.prototype.runLayout = function() {
		if (!this.hasCycle && this.inited) {
			this.goAlgo()
		}
	};
	BalloonLayout.prototype.initAlgo = function() {
		var _self = this;
		this.inited = true;
		_self.nodeIds = [];
		_self.nodeNeighbers = [];
		_self.nodes.forEach(function(node) {
			_self.nodeIds.push(node.id);
			var neighbers = _self.initNodeNeighbers(node);
			_self.nodeNeighbers.push(neighbers);
			_self.checkHasCycle(node, [])
		});
		_self.buildTree();
		_self.setRootPolars()
	};
	BalloonLayout.prototype.initNodeNeighbers = function(node) {
		var _self = this;
		var nodeNeighbers = [];
		var outLinks = node.outLinks || [];
		outLinks.forEach(function(link) {
			var target = link.target;
			var source = link.source;
			if (source.id != target.id) {
				var index = _self.nodeIds.indexOf(target.id);
				var childNodes = _self.nodeNeighbers[index] || [];
				var childNodeIds = [];
				childNodes.forEach(function(n) {
					childNodeIds.push(n.id)
				});
				if (childNodeIds.indexOf(node.id) == -1) {
					nodeNeighbers.push(target)
				}
			}
		});
		return nodeNeighbers
	};
	BalloonLayout.prototype.newLayoutData = function() {
		var layoutData = {
			finishx: 0.0,
			finishy: 0.0,
			xdistance: 0.0,
			ydistance: 0.0
		};
		return layoutData
	};
	BalloonLayout.prototype.setRootPolars = function() {
		var _self = this;
		var roots = _self.getRoots();
		var center = _self.getCenter();
		_self.setPolars(roots, center, _self.radius)
	};
	BalloonLayout.prototype.setRootPolar = function(root) {
		root.x = 10;
		root.y = 10
	};
	BalloonLayout.prototype.setPolars = function(kids, parentLocation, parentRadius) {
		var _self = this;
		var childCount = kids.length;
		if (childCount == 0) {
			return
		}
		var angle = Math.max(0, Math.PI / 2 * (1 - 2.0 / childCount));
		var childRadius = parentRadius * Math.cos(angle) / (1 + Math.cos(angle));
		var radius = parentRadius - childRadius;
		var rand = Math.random();
		for (var i = 0; i < childCount; i++) {
			var node = kids[i];
			var theta = i * 2 * Math.PI / childCount + rand;
			var x = radius * Math.cos(theta);
			var y = radius * Math.sin(theta);
			x = x + parentLocation.x;
			y = y + parentLocation.y;
			var posData = _self.newLayoutData();
			posData.finishx = x;
			posData.finishy = y;
			posData.xdistance = (1.0 / _self.intSteps) * (x - node.x);
			posData.ydistance = (1.0 / _self.intSteps) * (y - node.y);
			node.layoutData = posData;
			var p = {
				x: x,
				y: y
			};
			var childNodes = _self.getSuccessors(node);
			_self.setPolars(childNodes, p, childRadius)
		}
	};
	BalloonLayout.prototype.getCenter = function(node) {
		var _self = this;
		var parent = _self.getParent(node);
		if (parent == null) {
			return _self.getCenter()
		}
		return {
			x: parent.x,
			y: parent.y
		}
	};
	BalloonLayout.prototype.getCenter = function() {
		var _self = this;
		return {
			x: 0,
			y: 0
		}
	};
	BalloonLayout.prototype.getParent = function(node) {
		var inLinks = node.inLinks || [];
		if (inLinks.length > 0) {
			return inLinks[0].source
		}
		return null
	};
	BalloonLayout.prototype.buildTree = function() {
		var _self = this;
		var roots = _self.getRoots();
		if (roots.length > 0) {
			_self.calculateRootsX(roots);
			roots.forEach(function(node) {
				_self.calculateNodeX(node);
				_self.currentX += node.sizeT / 2 + _self.distX;
				_self.buildNodeTree(node, _self.currentX)
			})
		}
	};
	BalloonLayout.prototype.getRoots = function() {
		var _self = this;
		var roots = [];
		_self.nodes.forEach(function(node) {
			if ((node.inLinks || []).length == 0) {
				roots.push(node)
			}
		});
		return roots
	};
	BalloonLayout.prototype.calculateRootsX = function(roots) {
		var _self = this;
		var size = 0;
		roots.forEach(function(node) {
			var childNodes = _self.getSuccessors(node);
			var childrenNum = childNodes.length;
			if (childrenNum != 0) {
				childNodes.forEach(function(node) {
					size += _self.calculateNodeX(node) + _self.distX
				})
			}
			size = Math.max(0, size - _self.distX);
			node.sizeT = size
		});
		return size
	};
	BalloonLayout.prototype.calculateNodeX = function(node) {
		var _self = this;
		var size = 0;
		var childNodes = _self.getSuccessors(node);
		var childrenNum = childNodes.length;
		if (childrenNum != 0) {
			childNodes.forEach(function(node) {
				size += _self.calculateNodeX(node) + _self.distX
			})
		}
		size = Math.max(0, size - _self.distX);
		node.sizeT = size;
		return size
	};
	BalloonLayout.prototype.buildNodeTree = function(node, x) {
		var _self = this;
		_self.currentY += _self.distY;
		_self.currentX = x;
		_self.setCurrentPositionFor(node);
		var sizeXofCurrent = node.sizeT;
		var lastX = x - sizeXofCurrent / 2;
		var sizeXofChild;
		var startXofChild;
		var childNodes = _self.getSuccessors(node);
		childNodes.forEach(function(n) {
			sizeXofChild = n.sizeT;
			startXofChild = lastX + sizeXofChild / 2;
			_self.buildNodeTree(n, startXofChild);
			lastX = lastX + sizeXofChild + _self.distX
		});
		_self.currentY -= _self.distY
	};
	BalloonLayout.prototype.setCurrentPositionFor = function(node) {
		var _self = this;
		var x = _self.currentX;
		var y = _self.currentY;
		node.tempx = x;
		node.tempy = y
	};
	BalloonLayout.prototype.getSuccessors = function(node) {
		var _self = this;
		var index = _self.nodeIds.indexOf(node.id);
		var childNodes = _self.nodeNeighbers[index];
		return childNodes
	};
	BalloonLayout.prototype.goAlgo = function() {
		var _self = this;
		var position = null;
		var nodes = _self.nodes;
		var length = nodes.length;
		for (var i = 0; i < length; i++) {
			var n = nodes[i];
			position = n.layoutData;
			if (position == null) {
				continue
			}
			if (_self.boolTransition) {
				var currentDistance = Math.abs(n.x - position.finishx);
				var nextDistance = Math.abs((n.x + position.xdistance) - position.finishx);
				if (nextDistance < currentDistance) {
					n.x += position.xdistance
				} else {
					n.x = position.finishx
				}
				currentDistance = Math.abs(n.y - position.finishy);
				nextDistance = Math.abs((n.y + position.ydistance) - position.finishy);
				if (nextDistance < currentDistance) {
					n.y += position.ydistance
				} else {
					n.y = position.finishy
				}
				if (n.x == position.finishx && n.y == position.finishy) {
					n.layoutData = null
				}
			} else {
				n.x = position.finishx;
				n.y = position.finishy;
				n.layoutData = null
			}
		}
	};
	BalloonLayout.prototype.checkHasCycle = function(node, pathNodes) {
		var _self = this;
		(node.outLinks || []).forEach(function(_link) {
			var target = _link.target;
			if (node.id == target.id || pathNodes.indexOf(target.id) != -1) {
				_self.hasCycle = true;
				return
			}
			pathNodes.push(target.id);
			_self.checkHasCycle(target, pathNodes)
		})
	};
	var RadiaTreeLayout = function(nodes, links) {
		this.nodes = nodes;
		this.links = links;
		this.nodeIds = [];
		this.nodeNeighbers = [];
		this.distX = 50;
		this.distY = 50;
		this.currentX = 0;
		this.currentY = 0;
		this.boolTransition = true;
		this.intSteps = 50;
		this.hasCycle = false;
		this.inited = false
	};
	RadiaTreeLayout.prototype.getConfig = function() {
		return [{
			'label': '水平间距',
			'distX': 50
		}, {
			'label': '垂直间距',
			'distY': 50
		}]
	};
	RadiaTreeLayout.prototype.resetConfig = function(layoutConfig) {
		if (layoutConfig) {
			this.distX = Number(layoutConfig['distX']) || 50;
			this.distY = Number(layoutConfig['distY']) || 50
		}
		this.initAlgo()
	};
	RadiaTreeLayout.prototype.runLayout = function() {
		if (!this.hasCycle && this.inited) {
			this.goAlgo()
		}
	};
	RadiaTreeLayout.prototype.newLayoutData = function() {
		var layoutData = {
			finishx: 0.0,
			finishy: 0.0,
			xdistance: 0.0,
			ydistance: 0.0
		};
		return layoutData
	};
	RadiaTreeLayout.prototype.initAlgo = function() {
		var _self = this;
		this.inited = true;
		_self.nodeIds = [];
		_self.nodeNeighbers = [];
		_self.nodes.forEach(function(node) {
			_self.nodeIds.push(node.id);
			var neighbers = _self.initNodeNeighbers(node);
			_self.nodeNeighbers.push(neighbers);
			_self.checkHasCycle(node, [])
		});
		_self.buildTree();
		_self.setRadialLocations()
	};
	RadiaTreeLayout.prototype.checkHasCycle = function(node, pathNodes) {
		var _self = this;
		(node.outLinks || []).forEach(function(_link) {
			var target = _link.target;
			if (node.id == target.id || pathNodes.indexOf(target.id) != -1) {
				_self.hasCycle = true;
				return
			}
			pathNodes.push(target.id);
			_self.checkHasCycle(target, pathNodes)
		})
	};
	RadiaTreeLayout.prototype.initNodeNeighbers = function(node) {
		var _self = this;
		var nodeNeighbers = [];
		var outLinks = node.outLinks || [];
		outLinks.forEach(function(link) {
			var target = link.target;
			if (node.id != target.id) {
				var index = _self.nodeIds.indexOf(target.id);
				var childNodes = _self.nodeNeighbers[index] || [];
				var childNodeIds = [];
				childNodes.forEach(function(n) {
					childNodeIds.push(n.id)
				});
				if (childNodeIds.indexOf(node.id) == -1) {
					nodeNeighbers.push(target)
				}
			}
		});
		return nodeNeighbers
	};
	RadiaTreeLayout.prototype.buildTree = function() {
		var _self = this;
		var roots = _self.getRoots();
		if (roots.length > 0) {
			_self.calculateRootsX(roots);
			roots.forEach(function(node) {
				_self.calculateNodeX(node);
				_self.currentX += node.sizeT / 2 + _self.distX;
				_self.buildNodeTree(node, _self.currentX)
			})
		}
	};
	RadiaTreeLayout.prototype.getRoots = function() {
		var _self = this;
		var roots = [];
		_self.nodes.forEach(function(node) {
			if ((node.inLinks || []).length == 0) {
				roots.push(node)
			}
		});
		return roots
	};
	RadiaTreeLayout.prototype.calculateRootsX = function(roots) {
		var _self = this;
		var size = 0;
		roots.forEach(function(node) {
			var childNodes = _self.getSuccessors(node);
			var childrenNum = childNodes.length;
			if (childrenNum != 0) {
				childNodes.forEach(function(node) {
					size += _self.calculateNodeX(node) + _self.distX
				})
			}
			size = Math.max(0, size - _self.distX);
			node.sizeT = size
		});
		return size
	};
	RadiaTreeLayout.prototype.calculateNodeX = function(node) {
		var _self = this;
		var size = 0;
		var childNodes = _self.getSuccessors(node);
		if (childNodes.length != 0) {
			childNodes.forEach(function(_node) {
				size += _self.calculateNodeX(_node) + _self.distX
			})
		}
		size = Math.max(0, size - _self.distX);
		node.sizeT = size;
		return size
	};
	RadiaTreeLayout.prototype.buildNodeTree = function(node, x) {
		var _self = this;
		_self.currentY += _self.distY;
		_self.currentX = x;
		_self.setCurrentPositionFor(node);
		var sizeXofCurrent = node.sizeT;
		var lastX = x - sizeXofCurrent / 2;
		var sizeXofChild;
		var startXofChild;
		var childNodes = _self.getSuccessors(node);
		childNodes.forEach(function(n) {
			sizeXofChild = n.sizeT;
			startXofChild = lastX + sizeXofChild / 2;
			_self.buildNodeTree(n, startXofChild);
			lastX = lastX + sizeXofChild + _self.distX
		});
		_self.currentY -= _self.distY
	};
	RadiaTreeLayout.prototype.setCurrentPositionFor = function(node) {
		var _self = this;
		var x = _self.currentX;
		var y = _self.currentY;
		node.tempx = x;
		node.tempy = y
	};
	RadiaTreeLayout.prototype.getSuccessors = function(node) {
		var _self = this;
		var index = _self.nodeIds.indexOf(node.id);
		var childNodes = _self.nodeNeighbers[index];
		return childNodes
	};
	RadiaTreeLayout.prototype.setRadialLocations = function() {
		var _self = this;
		var maxPoint = _self.getMaxXY();
		var maxx = maxPoint.x;
		var maxy = maxPoint.y;
		var theta = 2 * Math.PI / maxx;
		var deltaRadius = maxx / 2 / maxy;
		_self.nodes.forEach(function(node) {
			var _theta = node.tempx * theta;
			var _raduis = (node.tempy - _self.distY) * deltaRadius;
			var x = _raduis * Math.cos(_theta);
			var y = _raduis * Math.sin(_theta);
			var posData = _self.newLayoutData();
			posData.finishx = x;
			posData.finishy = y;
			posData.xdistance = (1.0 / _self.intSteps) * (x - node.x);
			posData.ydistance = (1.0 / _self.intSteps) * (y - node.y);
			node.layoutData = posData
		})
	};
	RadiaTreeLayout.prototype.getMaxXY = function() {
		var _self = this;
		var maxx = 0,
			maxy = 0;
		_self.nodes.forEach(function(node) {
			if (!node.tempx) {
				node.tempx = _self.currentX
			}
			if (!node.tempy) {
				node.tempy = _self.currentY
			}
			maxx = Math.max(maxx, node.tempx);
			maxy = Math.max(maxy, node.tempy)
		});
		return {
			x: maxx,
			y: maxy
		}
	};
	RadiaTreeLayout.prototype.goAlgo = function() {
		var _self = this;
		var position = null;
		var nodes = _self.nodes;
		var length = nodes.length;
		for (var i = 0; i < length; i++) {
			var n = nodes[i];
			position = n.layoutData;
			if (position == null) {
				continue
			}
			if (_self.boolTransition) {
				var currentDistance = Math.abs(n.x - position.finishx);
				var nextDistance = Math.abs((n.x + position.xdistance) - position.finishx);
				if (nextDistance < currentDistance) {
					n.x += position.xdistance
				} else {
					n.x = position.finishx
				}
				currentDistance = Math.abs(n.y - position.finishy);
				nextDistance = Math.abs((n.y + position.ydistance) - position.finishy);
				if (nextDistance < currentDistance) {
					n.y += position.ydistance
				} else {
					n.y = position.finishy
				}
				if (n.x == position.finishx && n.y == position.finishy) {
					n.layoutData = null
				}
			} else {
				n.x = position.finishx;
				n.y = position.finishy;
				n.layoutData = null
			}
		}
	};
	var TopoTreeLayout = function(nodes, links) {
		this.nodes = nodes;
		this.links = links;
		this.raduis = 50;
		this.boolTransition = true;
		this.intSteps = 50;
		this.hasCycle = false;
		this.inited = false
	};
	TopoTreeLayout.prototype.getConfig = function() {
		return [{
			'label': '节点大小',
			'raduis': 50
		}]
	};
	TopoTreeLayout.prototype.resetConfig = function(layoutConfig) {
		if (layoutConfig) {
			this.raduis = Number(layoutConfig['raduis']) || 50
		}
		this.initAlgo()
	};
	TopoTreeLayout.prototype.initAlgo = function() {
		var _self = this;
		var roots = _self.getRoots();
		roots[0].tempX = roots[0].x = 1000;
		roots[0].tempY = roots[0].y = 500;
		_self.countRadius(roots[0], _self.raduis);
		_self.layout(roots[0], _self.raduis * 3);
		this.inited = true
	};
	TopoTreeLayout.prototype.countRadius = function(root, minR) {
		var self = this;
		minR = (minR == null ? self.raduis : minR);
		var children = self.getSuccessors(root);
		var size = children.length;
		if (size <= 1) {
			root.rdegree = 0;
			root.mradius = minR;
			root.totalRadius = minR
		}
		children.forEach(function(child) {
			self.countRadius(child, minR)
		});
		if (size > 1) {
			var child0 = children[0];
			var totalRadius = child0.totalRadius;
			if (size == 2) {
				size = 3
			}
			var degree = Math.PI / size;
			var pRadius = totalRadius / Math.sin(degree);
			root.mradius = pRadius;
			root.totalRadius = pRadius + totalRadius;
			root.rdegree = degree * 2
		}
	};
	TopoTreeLayout.prototype.layout = function(root, minR) {
		var self = this;
		var children = self.getSuccessors(root);
		var len = children.length;
		var degree = root.rdegree;
		var r = root.mradius;
		var rootPosition = {
			x: root.tempX,
			y: root.tempY
		};
		children.forEach(function(node, index) {
			var s = Math.sin(degree * index),
				c = Math.cos(degree * index),
				x = s * r,
				y = c * r;
			x = Math.round(x + rootPosition.x);
			y = Math.round(y + rootPosition.y);
			node.tempX = x;
			node.tempY = y;
			var posData = self.newLayoutData();
			posData.finishx = x;
			posData.finishy = y;
			posData.xdistance = (1.0 / self.intSteps) * (x - node.x);
			posData.ydistance = (1.0 / self.intSteps) * (y - node.y);
			node.layoutData = posData;
			self.layout(node, minR)
		})
	};
	TopoTreeLayout.prototype.runLayout = function() {
		if (!this.hasCycle && this.inited) {
			this.goAlgo()
		}
	};
	TopoTreeLayout.prototype.newLayoutData = function() {
		var layoutData = {
			finishx: 0.0,
			finishy: 0.0,
			xdistance: 0.0,
			ydistance: 0.0
		};
		return layoutData
	};
	TopoTreeLayout.prototype.getRoots = function() {
		var _self = this;
		var roots = [];
		_self.nodes.forEach(function(node) {
			if ((node.inLinks || []).length == 0) {
				roots.push(node)
			}
			_self.checkHasCycle(node, [])
		});
		return roots
	};
	TopoTreeLayout.prototype.checkHasCycle = function(node, pathNodes) {
		var _self = this;
		(node.outLinks || []).forEach(function(_link) {
			var target = _link.target;
			if (node.id == target.id || pathNodes.indexOf(target.id) != -1) {
				_self.hasCycle = true;
				return
			}
			pathNodes.push(target.id);
			_self.checkHasCycle(target, pathNodes)
		})
	};
	TopoTreeLayout.prototype.getSuccessors = function(node) {
		var _self = this;
		var children = [];
		if (!node) {
			return children
		}(node.outLinks || []).forEach(function(l) {
			children.push(l.target)
		});
		return children
	};
	TopoTreeLayout.prototype.goAlgo = function() {
		var _self = this;
		var position = null;
		var nodes = _self.nodes;
		var length = nodes.length;
		for (var i = 0; i < length; i++) {
			var n = nodes[i];
			position = n.layoutData;
			if (position == null) {
				continue
			}
			if (_self.boolTransition) {
				var currentDistance = Math.abs(n.x - position.finishx);
				var nextDistance = Math.abs((n.x + position.xdistance) - position.finishx);
				if (nextDistance < currentDistance) {
					n.x += position.xdistance
				} else {
					n.x = position.finishx
				}
				currentDistance = Math.abs(n.y - position.finishy);
				nextDistance = Math.abs((n.y + position.ydistance) - position.finishy);
				if (nextDistance < currentDistance) {
					n.y += position.ydistance
				} else {
					n.y = position.finishy
				}
				if (n.x == position.finishx && n.y == position.finishy) {
					n.layoutData = null
				}
			} else {
				n.x = position.finishx;
				n.y = position.finishy;
				n.layoutData = null
			}
		}
	};
	TopoTreeLayout.prototype.checkHasCycle = function(node, pathNodes) {
		var _self = this;
		(node.outLinks || []).forEach(function(_link) {
			var target = _link.target;
			if (node.id == target.id || pathNodes.indexOf(target.id) != -1) {
				_self.hasCycle = true;
				return
			}
			pathNodes.push(target.id);
			_self.checkHasCycle(target, pathNodes)
		})
	};
	var ForceD3Layout = function(nodes, links) {
		this.nodes = nodes;
		this.links = links;
		this.size = [1500, 700];
		this.alpha = 0.1;
		this.friction = 0.9;
		this.linkDistance = 120;
		this.linkStrength = 0.09;
		this.charge = -200;
		this.gravity = 0.015;
		this.theta = 0.8;
		this.distances = [];
		this.strengths = [];
		this.charges = [];
		this.inited = false
	};
	ForceD3Layout.prototype.getConfig = function() {
		return [{
			'label': '斥力',
			'froce': 0.95
		}, {
			'label': '边长度',
			'linkDistance': 150
		}, {
			'label': '边强度',
			'linkStrength': 0.09
		}, {
			'label': '引力',
			'charge': -300
		}, {
			'label': '重力',
			'gravity': 0.015
		}]
	};
	ForceD3Layout.prototype.resetConfig = function(layoutConfig) {
		if (layoutConfig) {
			this.friction = Number(layoutConfig['froce']) || 0.95;
			this.linkDistance = Number(layoutConfig['linkDistance']) || 150;
			this.linkStrength = Number(layoutConfig['linkStrength']) || 0.09;
			this.charge = Number(layoutConfig['charge']) || -300;
			this.gravity = Number(layoutConfig['gravity']) || 0.015;
			this.initAlgo()
		}
	};
	ForceD3Layout.prototype.runLayout = function() {
		if (this.inited) {
			this.goAlgo()
		}
	};
	ForceD3Layout.prototype.initAlgo = function() {
		var _self = this;
		var i, j, n = _self.nodes.length,
			m = _self.links.length,
			w = _self.size[0],
			h = _self.size[1],
			neighbors = [],
			o;
		_self.charges = [];
		for (i = 0; i < n; ++i) {
			(o = _self.nodes[i]).index = i;
			o.weight = 0;
			o.px = o.x;
			o.py = o.y;
			_self.charges[i] = _self.charge
		}
		for (i = 0; i < m; ++i) {
			o = _self.links[i];
			var source = o.source;
			var target = o.target;
			_self.distances[i] = _self.linkDistance;
			_self.strengths[i] = _self.linkStrength;
			++source.weight;
			++target.weight
		}
		this.inited = true;

		function position(dimension, size) {
			var neighbors = neighbor(i),
				j = -1,
				m = neighbors.length,
				x;
			while (++j < m) {
				if (!isNaN(x = neighbors[j][dimension])) {
					return x
				}
			}
			return Math.random() * size
		};

		function neighbor() {
			for (j = 0; j < n; ++j) {
				neighbors[j] = []
			}
			for (j = 0; j < m; ++j) {
				var o = _self.links[j];
				neighbors[o.source.index].push(o.target);
				neighbors[o.target.index].push(o.source)
			}
			return neighbors[i]
		};
		return this.resume()
	};
	ForceD3Layout.prototype.goAlgo = function() {
		this.tick()
	};
	ForceD3Layout.prototype.alpha1 = function(x) {
		var _self = this;
		if (!arguments.length) {
			return _self.alpha
		}
		if (_self.alpha) {
			if (x > 0) {
				_self.alpha = x
			} else {
				_self.alpha = 0
			}
		} else if (x > 0) {
			_self.tick()
		}
		return this
	};
	ForceD3Layout.prototype.resume = function() {
		return this.alpha1(.1)
	};
	ForceD3Layout.prototype.stop = function() {
		return this.alpha1(0)
	};
	ForceD3Layout.prototype.tick = function() {
		var _self = this;
		var n = _self.nodes.length,
			m = _self.links.length,
			q, i, o, s, t, l, k, x, y;
		for (i = 0; i < m; ++i) {
			o = _self.links[i];
			s = o.source;
			t = o.target;
			x = t.x - s.x;
			y = t.y - s.y;
			if (l = (x * x + y * y)) {
				l = _self.alpha * _self.strengths[i] * ((l = Math.sqrt(l)) - _self.distances[i]) / l;
				x *= l;
				y *= l;
				t.x -= x * (k = s.weight / (t.weight + s.weight));
				t.y -= y * k;
				s.x += x * (k = 1 - k);
				s.y += y * k
			}
		}
		if (k = _self.alpha * _self.gravity) {
			x = _self.size[0] / 2;
			y = _self.size[1] / 2;
			i = -1;
			if (k) {
				while (++i < n) {
					o = _self.nodes[i];
					o.x += (x - o.x) * k;
					o.y += (y - o.y) * k
				}
			}
		}
		if (_self.charge) {
			_self.forceAccumulate(q = _self.quadtree(_self.nodes), _self.alpha, _self.charges);
			i = -1;
			while (++i < n) {
				if (!(o = _self.nodes[i]).fixed) {
					q.visit(repulse(o))
				}
			}
		}
		i = -1;
		while (++i < n) {
			o = _self.nodes[i];
			if (o.fixed) {
				o.x = o.px;
				o.y = o.py
			} else {
				o.x -= (o.px - (o.px = o.x)) * _self.friction;
				o.y -= (o.py - (o.py = o.y)) * _self.friction
			}
		}
		function repulse(node) {
			return function(quad, x1, y1, x2, y2) {
				if (quad.point !== node) {
					var dx = quad.cx - node.x,
						dy = quad.cy - node.y,
						dn = 1 / Math.sqrt(dx * dx + dy * dy);
					if ((x2 - x1) * dn < _self.theta) {
						var k = quad.charge * dn * dn;
						node.px -= dx * k;
						node.py -= dy * k;
						return true
					}
					if (quad.point && isFinite(dn)) {
						var k = quad.pointCharge * dn * dn;
						node.px -= dx * k;
						node.py -= dy * k
					}
				}
				return !quad.charge
			}
		}
	};
	ForceD3Layout.prototype.forceAccumulate = function(quad, alpha, charges) {
		var _self = this;
		var cx = 0,
			cy = 0;
		quad.charge = 0;
		if (!quad.leaf) {
			var nodes = quad.nodes,
				n = nodes.length,
				i = -1,
				c;
			while (++i < n) {
				c = nodes[i];
				if (c == null) {
					continue
				}
				_self.forceAccumulate(c, alpha, charges);
				quad.charge += c.charge;
				cx += c.charge * c.cx;
				cy += c.charge * c.cy
			}
		}
		if (quad.point) {
			if (!quad.leaf) {
				quad.point.x += Math.random() - .5;
				quad.point.y += Math.random() - .5
			}
			var k = _self.alpha * _self.charges[quad.point.index];
			quad.charge += quad.pointCharge = k;
			cx += k * quad.point.x;
			cy += k * quad.point.y
		}
		quad.cx = cx / quad.charge;
		quad.cy = cy / quad.charge
	};
	ForceD3Layout.prototype.quadtree = function(points, x1, y1, x2, y2) {
		var _self = this;
		var p, i = -1,
			n = points.length;
		if (n && isNaN(points[0].x)) {
			points = points.map(function(p) {
				return {
					x: p[0],
					y: p[1]
				}
			})
		}
		if (arguments.length < 5) {
			if (arguments.length === 3) {
				y2 = x2 = y1;
				y1 = x1
			} else {
				x1 = y1 = Infinity;
				x2 = y2 = -Infinity;
				while (++i < n) {
					p = points[i];
					if (p.x < x1) {
						x1 = p.x
					}
					if (p.y < y1) {
						y1 = p.y
					}
					if (p.x > x2) {
						x2 = p.x
					}
					if (p.y > y2) {
						y2 = p.y
					}
				}
				var dx = x2 - x1,
					dy = y2 - y1;
				if (dx > dy) {
					y2 = y1 + dx
				} else {
					x2 = x1 + dy
				}
			}
		};

		function insert(n, p, x1, y1, x2, y2) {
			if (isNaN(p.x) || isNaN(p.y)) {
				return
			}
			if (n.leaf) {
				var v = n.point;
				if (v) {
					if ((Math.abs(v.x - p.x) + Math.abs(v.y - p.y)) < .01) {
						insertChild(n, p, x1, y1, x2, y2)
					} else {
						n.point = null;
						insertChild(n, v, x1, y1, x2, y2);
						insertChild(n, p, x1, y1, x2, y2)
					}
				} else {
					n.point = p
				}
			} else {
				insertChild(n, p, x1, y1, x2, y2)
			}
		};

		function insertChild(n, p, x1, y1, x2, y2) {
			var sx = (x1 + x2) * .5,
				sy = (y1 + y2) * .5,
				right = p.x >= sx,
				bottom = p.y >= sy,
				i = (bottom << 1) + right;
			n.leaf = false;
			n = n.nodes[i] || (n.nodes[i] = {
				leaf: true,
				nodes: [],
				point: null
			});
			if (right) {
				x1 = sx
			} else {
				x2 = sx
			}
			if (bottom) {
				y1 = sy
			} else {
				y2 = sy
			}
			insert(n, p, x1, y1, x2, y2)
		};

		function quadtreeVisit(f, node, x1, y1, x2, y2) {
			if (!f(node, x1, y1, x2, y2)) {
				var sx = (x1 + x2) * .5,
					sy = (y1 + y2) * .5,
					children = node.nodes;
				if (children[0]) {
					quadtreeVisit(f, children[0], x1, y1, sx, sy)
				}
				if (children[1]) {
					quadtreeVisit(f, children[1], sx, y1, x2, sy)
				}
				if (children[2]) {
					quadtreeVisit(f, children[2], x1, sy, sx, y2)
				}
				if (children[3]) {
					quadtreeVisit(f, children[3], sx, sy, x2, y2)
				}
			}
		};
		var root = {
			leaf: true,
			nodes: [],
			point: null
		};
		root.add = function(p) {
			insert(root, p, x1, y1, x2, y2)
		};
		root.visit = function(f) {
			quadtreeVisit(f, root, x1, y1, x2, y2)
		};
		points.forEach(root.add);
		return root
	};
	var ForceDirected = function(_nodes, _links) {
		this.nodes = _nodes;
		this.links = _links;
		this.attraction_multiplier = 5;
		this.repulsion_multiplier = 0.5;
		this.width = 1200;
		this.height = 800;
		this.inited = false;
		var EPSILON = 1 / 100000;
		var attraction_constant;
		var repulsion_constant;
		var forceConstant;
		var layout_iterations = 0;
		var max_iterations = 100000;
		var temperature = 0;
		var scalar = 10;
		var that = this;
		var nodes_length = _nodes.length;
		var links_length = _links.length;
		this.getConfig = function() {
			return [{
				'label': '吸引力',
				'attraction': 2
			}, {
				'label': '斥力',
				'force': 100
			}]
		};
		this.resetConfig = function(layoutConfig) {
			if (layoutConfig) {
				attraction_multiplier = Number(layoutConfig['attraction']) || 2;
				forceConstant = Number(layoutConfig['force']) || 100;
				that.initAlgo()
			}
		};
		this.initAlgo = function() {
			temperature = 10.0;
			layout_iterations = 0;
			attraction_constant = that.attraction_multiplier * forceConstant;
			repulsion_constant = that.repulsion_multiplier * forceConstant;
			that.inited = true
		};
		this.runLayout = function() {
			if (that.inited) {
				that.goAlgo()
			}
		};
		this.goAlgo = function() {
			if (temperature > (1 / 100000)) {
				var i, j, delta, delta_length, force, change;
				for (i = 0; i < nodes_length; i++) {
					var node_v = that.nodes[i];
					node_v.layout = node_v.layout || {};
					if (i === 0) {
						node_v.layout.offset = new Vector2()
					}
					node_v.layout.force = 0;
					node_v.layout.tmp_pos = node_v.layout.tmp_pos || new Vector2().setVector(node_v);
					for (j = i + 1; j < nodes_length; j++) {
						var node_u = that.nodes[j];
						if (i != j) {
							node_u.layout = node_u.layout || {};
							node_u.layout.tmp_pos = node_u.layout.tmp_pos || new Vector2().setVector(node_u);
							delta = node_v.layout.tmp_pos.clone().sub(node_u.layout.tmp_pos);
							delta_length = Math.max(EPSILON, Math.sqrt(delta.clone().multiply(delta).sum()));
							force = (repulsion_constant * repulsion_constant) / delta_length;
							node_v.layout.force += force;
							node_u.layout.force += force;
							if (i === 0) {
								node_u.layout.offset = new Vector2()
							}
							change = delta.clone().multiply(new Vector2().setScalar(force / delta_length));
							node_v.layout.offset.add(change);
							node_u.layout.offset.sub(change)
						}
					}
				}
				for (i = 0; i < links_length; i++) {
					var link = that.links[i];
					delta = link.source.layout.tmp_pos.clone().sub(link.target.layout.tmp_pos);
					delta_length = Math.max(EPSILON, Math.sqrt(delta.clone().multiply(delta).sum()));
					force = (delta_length * delta_length) / attraction_constant;
					link.source.layout.force -= force;
					link.target.layout.force += force;
					change = delta.clone().multiply(new Vector2().setScalar(force / delta_length));
					link.target.layout.offset.add(change);
					link.source.layout.offset.sub(change)
				}
				for (i = 0; i < nodes_length; i++) {
					var node = that.nodes[i];
					delta_length = Math.max(EPSILON, Math.sqrt(node.layout.offset.clone().multiply(node.layout.offset).sum()));
					node.layout.tmp_pos.add(node.layout.offset.clone().multiply(new Vector2().setScalar(Math.min(delta_length, temperature) / delta_length)));
					var tmpPosition = new Vector2(node.x, node.y, 0);
					tmpPosition.sub(node.layout.tmp_pos).divide(new Vector2().setScalar(scalar));
					node.x -= tmpPosition.x;
					node.y -= tmpPosition.y
				}
				temperature *= (1 - (layout_iterations / max_iterations));
				layout_iterations++
			}
		}
	};

	function Vector2(x, y) {
		this.x = x || 0;
		this.y = y || 0
	};
	Object.assign(Vector2.prototype, {
		set: function(x, y) {
			this.x = x;
			this.y = y;
			return this
		},
		setScalar: function(scalar) {
			this.x = scalar;
			this.y = scalar;
			return this
		},
		setVector: function(v) {
			this.x = v.x || 0;
			this.y = v.y || 0;
			return this
		},
		clone: function() {
			return new this.constructor(this.x, this.y, this.z)
		},
		add: function(v) {
			this.x += v.x;
			this.y += v.y;
			return this
		},
		addScalar: function(s) {
			this.x += s;
			this.y += s;
			return this
		},
		sub: function(v) {
			this.x -= v.x;
			this.y -= v.y;
			return this
		},
		multiply: function(v) {
			this.x *= v.x;
			this.y *= v.y;
			return this
		},
		divide: function(v) {
			this.x /= v.x;
			this.y /= v.y;
			return this
		},
		sum: function() {
			return this.x + this.y
		},
		equals: function(v) {
			return ((v.x === this.x) && (v.y === this.y))
		}
	});
	var HierarchicalLayout = function(nodes, links) {
		this.nodes = nodes;
		this.links = links;
		this.layerDistance = 100;
		this.nodeDistance = 60;
		this.treeSpacing = 0;
		this.direction = "UD";
		this.sortMethod = "directed";
		this.treeIndex = -1;
		this.continueOrBreak = 0;
		this.boolTransition = true;
		this.inited = false
	};
	HierarchicalLayout.prototype.getConfig = function() {
		return [{
			'label': '层间距',
			'layerDistance': 100
		}, {
			'label': '点间距',
			'nodeDistance': 100
		}, {
			'label': '排列方式',
			'sortMethod': [{
				label: '连线方向',
				value: 'directed'
			}, {
				label: '度大小',
				value: 'hubsize'
			}, {
				label: '指定点',
				value: 'selected'
			}]
		}, {
			'label': '排列方向',
			'direction': [{
				label: '上下',
				value: 'UD'
			}, {
				label: '下上',
				value: 'DU'
			}, {
				label: '左右',
				value: 'LR'
			}, {
				label: '右左',
				value: 'RL'
			}]
		}]
	};
	HierarchicalLayout.prototype.resetConfig = function(layoutConfig) {
		var self = this;
		if (layoutConfig) {
			self.layerDistance = Number(layoutConfig['layerDistance']) || 100;
			self.nodeDistance = Number(layoutConfig['nodeDistance']) || 80;
			self.sortMethod = layoutConfig['sortMethod'] || 'hubsize';
			self.direction = layoutConfig['direction'] || 'UD'
		}
		self.initAlgo()
	};
	HierarchicalLayout.prototype.newLayoutData = function() {
		var layoutData = {
			finishx: 0.0,
			finishy: 0.0,
			xdistance: 0.0,
			ydistance: 0.0
		};
		return layoutData
	};
	HierarchicalLayout.prototype.initAlgo = function() {
		var self = this;
		self.treeIndex = -1;
		self.continueOrBreak = 0;
		self.nodeIdList = [];
		self.selectedNodeIds = null;
		self.positionedNodes = {};
		self.hierarchicalLevels = {};
		self.hierarchicalTrees = {};
		self.lastNodeOnLevel = {};
		self.hierarchicalChildrenReference = {};
		self.hierarchicalParentReference = {};
		self.distributionIndex = {};
		self.distributionOrdering = {};
		self.distributionOrderingPresence = {};
		self.nodesIdMap = {};
		self.edges = {};
		self.setData();
		self.setupHierarchicalLayout();
		self.nodes.forEach(function(node) {
			var nodeId = String(node.id);
			var nodeLocal = self.nodesIdMap[nodeId];
			var x = 0,
				y = 0;
			if (self.direction == 'DU') {
				x = nodeLocal.x;
				y = -nodeLocal.y
			} else if (self.direction == 'RL') {
				x = -nodeLocal.x;
				y = nodeLocal.y
			} else {
				x = nodeLocal.x;
				y = nodeLocal.y
			}
			var posData = self.newLayoutData();
			posData.finishx = x;
			posData.finishy = y;
			posData.xdistance = (1.0 / 50) * (x - node.x);
			posData.ydistance = (1.0 / 50) * (y - node.y);
			node.layoutData = posData
		});
		self.inited = true
	};
	HierarchicalLayout.prototype.setData = function(selectedNodeId) {
		var self = this;
		self.nodes.forEach(function(node) {
			var nodeId = String(node.id);
			var nodeTemp = self.NodeLocal(nodeId);
			self.nodesIdMap[nodeId] = nodeTemp;
			self.nodeIdList.push(nodeId)
		});
		self.links.forEach(function(edge, i) {
			var id = String(i + 1);
			var edgeLocal = self.Edge(edge.source.id, edge.target.id, id);
			self.edges[id] = edgeLocal;
			var fromId = edgeLocal.fromId;
			var toId = edgeLocal.toId;
			var fromNode = self.nodesIdMap[fromId];
			if (fromNode.edgesIds.indexOf(id) == -1) {
				fromNode.edgesIds.push(id)
			}
			var toNode = self.nodesIdMap[toId];
			if (toNode.edgesIds.indexOf(id) == -1) {
				toNode.edgesIds.push(id)
			}
		});
		if (self.sortMethod == 'selected') {
			var selectedNodes = self.nodes.filter(function(n) {
				return n.selected == true
			});
			var _selectedNodeIds = [];
			selectedNodes.forEach(function(n) {
				_selectedNodeIds.push(String(n.id))
			});
			self.selectedNodeIds = _selectedNodeIds
		}
	};
	HierarchicalLayout.prototype.setupHierarchicalLayout = function() {
		var self = this;
		if (self.sortMethod == 'hubsize') {
			self.determineLevelsByHubsize()
		} else if (self.sortMethod == 'directed') {
			self.determineLevelsByDirected()
		} else if (self.sortMethod == 'selected') {
			self.determineLevelsBySelected()
		}
		self.nodeIdList.forEach(function(nodeId) {
			if (self.hierarchicalLevels[nodeId] == null) {
				self.hierarchicalLevels[nodeId] = 0
			}
		});
		var distribution = self.getDistribution();
		self.crawlNetwork("generateMap", -1);
		self.placeNodesByHierarchy(distribution);
		self.condenseHierarchy()
	};
	HierarchicalLayout.prototype.determineLevelsByDirected = function() {
		var self = this;
		self.crawlNetwork("determineLevelsByDirected", -1);
		var minLevel = 1000000000;
		self.nodeIdList.forEach(function(nodeId) {
			if (self.hierarchicalLevels[nodeId] != null) {
				minLevel = Math.min(self.hierarchicalLevels[nodeId], minLevel)
			}
		});
		self.nodeIdList.forEach(function(nodeId) {
			if (self.hierarchicalLevels[nodeId] != null) {
				self.hierarchicalLevels[nodeId] = self.hierarchicalLevels[nodeId] - minLevel
			}
		})
	};
	HierarchicalLayout.prototype.determineLevelsBySelected = function() {
		var self = this;
		if (self.selectedNodeIds == null) {
			self.determineLevelsByHubsize()
		} else {
			self.selectedNodeIds.forEach(function(nodeId) {
				self.hierarchicalLevels[nodeId] = 0
			});
			self.selectedNodeIds.forEach(function(nodeId) {
				if (self.nodesIdMap[nodeId] != null) {
					self.crawlNetwork("determineLevelsByHubsize", nodeId)
				}
			});
			self.determineLevelsByHubsize()
		}
	};
	HierarchicalLayout.prototype.NodeLocal = function(nodeId) {
		return {
			id: String(nodeId),
			edgesIds: [],
			x: 0,
			y: 0
		}
	};
	HierarchicalLayout.prototype.Edge = function(fromId, toId, id) {
		return {
			id: String(id),
			fromId: String(fromId),
			toId: String(toId)
		}
	};
	HierarchicalLayout.prototype.determineLevelsByHubsize = function() {
		var self = this;
		var hubSize = 1;
		while (hubSize > 0) {
			var _hubSize = 0;
			self.nodeIdList.forEach(function(nodeId) {
				var node = self.nodesIdMap[nodeId];
				if (self.hierarchicalLevels[node.id] == null) {
					_hubSize = node.edgesIds.length < _hubSize ? _hubSize : node.edgesIds.length
				}
			});
			hubSize = _hubSize;
			if (hubSize == 0) {
				return
			}
			self.nodeIdList.forEach(function(nodeId) {
				var node = self.nodesIdMap[nodeId];
				if (node.edgesIds.length == hubSize) {
					self.crawlNetwork("determineLevelsByHubsize", node.id)
				}
			})
		}
	};
	HierarchicalLayout.prototype.condenseHierarchy = function() {
		var self = this;
		var minPre = 1000000000,
			maxPre = -1000000000;
		var minAfter = 1000000000,
			maxAfter = -1000000000;
		for (var i = 0; i < self.treeIndex; i++) {
			for (var nodeId in self.hierarchicalTrees) {
				if (i == 0 && self.hierarchicalTrees[nodeId] == i) {
					var pos = self.getPositionForHierarchy(self.nodesIdMap[nodeId]);
					minPre = Math.min(pos, minPre);
					maxPre = Math.max(pos, maxPre)
				}
				if (self.hierarchicalTrees[nodeId] == i + 1) {
					var pos = self.getPositionForHierarchy(self.nodesIdMap[nodeId]);
					minAfter = Math.min(pos, minAfter);
					maxAfter = Math.max(pos, maxAfter)
				}
			}
			var diff = 0;
			for (var nodeId in self.hierarchicalTrees) {
				if (self.hierarchicalTrees[nodeId] == i + 1) {
					var node = self.nodesIdMap[nodeId];
					var pos = self.getPositionForHierarchy(node);
					self.setPositionForHierarchy(node, pos + diff + self.treeSpacing, -1)
				}
			}
			minPre = minAfter + diff + self.treeSpacing;
			maxPre = maxAfter + diff + self.treeSpacing
		}
	};
	HierarchicalLayout.prototype.shiftToCenter = function() {
		var self = this;
		var minY = 1000000000,
			maxY = -1000000000;
		var minX = 1000000000,
			maxX = -1000000000;
		self.nodeIdList.forEach(function(nodeId) {
			var node = self.nodesIdMap[nodeId];
			minX = Math.min(minX, node.x);
			maxX = Math.max(maxX, node.x);
			minY = Math.min(minY, node.y);
			maxY = Math.max(maxY, node.y)
		});
		var width = maxX - minX;
		var height = maxY - minY;
		var ratioW = 1,
			ratioH = 1;
		var standardW = 5000,
			standardH = 3000;
		if (width > standardW) {
			ratioW = standardW / width
		}
		if (height > standardH) {
			ratioH = standardH / height
		}
		self.nodeIdList.forEach(function(nodeId) {
			var node = self.nodesIdMap[nodeId];
			var nodeX = node.x;
			node.x = Math.round((nodeX - minX) * ratioW);
			var nodeY = node.y;
			node.y = Math.round((nodeY - minY) * ratioH)
		})
	};
	HierarchicalLayout.prototype.getDistribution = function() {
		var self = this;
		var distribution = {};
		self.nodeIdList.forEach(function(nodeId) {
			var node = self.nodesIdMap[nodeId];
			var level = self.hierarchicalLevels[nodeId] == null ? 0 : self.hierarchicalLevels[nodeId];
			if (self.direction == 'UD' || self.direction == 'DU') {
				node.y = self.layerDistance * level
			} else {
				node.x = self.layerDistance * level
			}
			var temp = distribution[String(level)];
			if (temp == null) {
				temp = []
			}
			temp.push(node);
			distribution[String(level)] = temp
		});
		return distribution
	};
	HierarchicalLayout.prototype.crawlNetwork = function(callbackFlag, nodeId) {
		var self = this;
		var startingNodeId = nodeId;
		var progress = {};
		var _treeIndex = 0;
		if (startingNodeId == -1) {
			self.nodeIdList.forEach(function(id) {
				var node = self.nodesIdMap[id];
				if (progress[id] == null) {
					progress = self.crawler(progress, node, callbackFlag, _treeIndex);
					_treeIndex++
				}
			})
		} else {
			var node = self.nodesIdMap[startingNodeId];
			progress = self.crawler(progress, node, callbackFlag, -111)
		}
	};
	HierarchicalLayout.prototype.crawler = function(progress, node, callbackFlag, _treeIndex) {
		var self = this;
		if (progress[node.id] == null) {
			if (_treeIndex != -111) {
				if (self.hierarchicalTrees[node.id] == null) {
					self.hierarchicalTrees[node.id] = _treeIndex;
					self.treeIndex = Math.max(_treeIndex, self.treeIndex)
				}
			}
			progress[node.id] = true;
			var edgesIdsLength = node.edgesIds.length;
			for (var i = 0; i < edgesIdsLength; i++) {
				var edgeId = node.edgesIds[i];
				var edge = self.edges[edgeId];
				var childNode = self.NodeLocal();
				if (edge.toId == node.id) {
					childNode = self.nodesIdMap[edge.fromId]
				} else {
					childNode = self.nodesIdMap[edge.toId]
				}
				if (node.id != childNode.id) {
					if (callbackFlag == 'determineLevelsByHubsize') {
						self.levelDownstream(node, childNode)
					} else if (callbackFlag == 'determineLevelsByDirected') {
						self.levelByDirection(node, childNode, edge)
					} else if (callbackFlag == 'generateMap') {
						self.fillInRelations(node, childNode)
					}
					self.crawler(progress, childNode, callbackFlag, _treeIndex)
				}
			}
		}
		return progress
	};
	HierarchicalLayout.prototype.levelDownstream = function(source, nodeB) {
		var self = this;
		if (self.hierarchicalLevels[nodeB.id] == null) {
			if (self.hierarchicalLevels[source.id] == null) {
				self.hierarchicalLevels[source.id] = 0
			}
			self.hierarchicalLevels[nodeB.id] = self.hierarchicalLevels[source.id] + 1
		}
	};
	HierarchicalLayout.prototype.levelByDirection = function(source, nodeB, edge) {
		var self = this;
		var minLevel = 10000;
		if (self.hierarchicalLevels[source.id] == null) {
			self.hierarchicalLevels[source.id] = minLevel
		}
		if (edge.toId == nodeB.id) {
			self.hierarchicalLevels[nodeB.id] = self.hierarchicalLevels[source.id] + 1
		} else {
			self.hierarchicalLevels[nodeB.id] = self.hierarchicalLevels[source.id] - 1
		}
	};
	HierarchicalLayout.prototype.fillInRelations = function(parentNode, childNode) {
		var self = this;
		if (self.hierarchicalLevels[childNode.id] > self.hierarchicalLevels[parentNode.id]) {
			if (self.hierarchicalChildrenReference[parentNode.id] == null) {
				self.hierarchicalChildrenReference[parentNode.id] = []
			}
			self.hierarchicalChildrenReference[parentNode.id].push(childNode.id);
			if (self.hierarchicalParentReference[childNode.id] == null) {
				self.hierarchicalParentReference[childNode.id] = []
			}
			self.hierarchicalParentReference[childNode.id].push(parentNode.id)
		}
	};
	HierarchicalLayout.prototype.placeNodesByHierarchy = function(distribution) {
		var self = this;
		for (var nodeId in distribution) {
			var nodesList = distribution[nodeId];
			var handledNodeCount = 0;
			var nodesListLength = nodesList.length;
			for (var i = 0; i < nodesListLength; i++) {
				var node = nodesList[i];
				if (self.positionedNodes[node.id] == null) {
					var pos = self.nodeDistance * handledNodeCount;
					if (handledNodeCount > 0) {
						pos = self.getPositionForHierarchy(nodesList[i - 1]) + self.nodeDistance
					}
					self.setPositionForHierarchy(node, pos, nodeId);
					self.validataPositionAndContinue(node, nodeId, pos);
					handledNodeCount++
				}
			}
		}
	};
	HierarchicalLayout.prototype.getPositionForHierarchy = function(node) {
		var self = this;
		if (self.direction == 'UD' || self.direction == 'DU') {
			return node.x
		}
		return node.y
	};
	HierarchicalLayout.prototype.setPositionForHierarchy = function(node, position, level) {
		var self = this;
		if (level != -1) {
			level = String(level);
			if (self.distributionOrdering[level] == null) {
				self.distributionOrdering[level] = [];
				self.distributionOrderingPresence[level] = {}
			}
			if (self.distributionOrderingPresence[level][node.id] == null) {
				self.distributionOrdering[level].push(node);
				self.distributionIndex[node.id] = self.distributionOrdering[level].length - 1
			}
			self.distributionOrderingPresence[level][node.id] = true
		}
		if (self.direction == 'UD' || self.direction == 'DU') {
			node.x = position
		} else {
			node.y = position
		}
	};
	HierarchicalLayout.prototype.validataPositionAndContinue = function(node, level, pos) {
		var self = this;
		level = String(level);
		if (self.lastNodeOnLevel[level] != null) {
			var previousPos = self.getPositionForHierarchy(self.nodesIdMap[self.lastNodeOnLevel[level]]);
			if (pos - previousPos < self.nodeDistance) {
				var diff = previousPos + self.nodeDistance - pos;
				self.shiftBlock(node.id, diff)
			}
		}
		self.lastNodeOnLevel[level] = node.id;
		self.positionedNodes[node.id] = true;
		self.placeBranchNodes(node, level)
	};
	HierarchicalLayout.prototype.shiftBlock = function(parentId, diff) {
		var self = this;
		if (self.direction == 'UD' || self.direction == 'DU') {
			var _x = self.nodesIdMap[parentId].x;
			self.nodesIdMap[parentId].x = _x + diff
		} else {
			var _y = self.nodesIdMap[parentId].y;
			self.nodesIdMap[parentId].y = _y + diff
		}
	};
	HierarchicalLayout.prototype.placeBranchNodes = function(parentNode, parentLevel) {
		var self = this;
		if (self.hierarchicalChildrenReference[parentNode.id] == null) {
			return
		}
		var childNodes = [];
		var length = self.hierarchicalChildrenReference[parentNode.id].length;
		for (var i = 0; i < length; i++) {
			childNodes.push(self.nodesIdMap[self.hierarchicalChildrenReference[parentNode.id][i]])
		}
		var childNodesLength = childNodes.length;
		for (var i = 0; i < childNodesLength; i++) {
			var childNode = childNodes[i];
			var childNodeLevel = self.hierarchicalLevels[childNode.id];
			if ((childNodeLevel > parentLevel) && (self.positionedNodes[childNode.id] == null)) {
				var pos = 0;
				if (i == 0) {
					pos = self.getPositionForHierarchy(self.nodesIdMap[parentNode.id])
				} else {
					pos = self.getPositionForHierarchy(childNodes[i - 1]) + self.nodeDistance
				}
				self.setPositionForHierarchy(childNode, pos, childNodeLevel);
				self.validataPositionAndContinue(childNode, childNodeLevel, pos)
			} else if (self.continueOrBreak != 0) {
				return
			}
		}
		var minPos = 1000000000,
			maxPos = -1000000000;
		for (var i = 0; i < childNodesLength; i++) {
			var childNode = childNodes[i];
			minPos = Math.min(minPos, self.getPositionForHierarchy(childNode));
			maxPos = Math.max(maxPos, self.getPositionForHierarchy(childNode))
		}
		var _pos = (minPos + maxPos) / 2;
		self.setPositionForHierarchy(parentNode, _pos, parentLevel)
	};
	HierarchicalLayout.prototype.runLayout = function() {
		if (this.inited) {
			this.goAlgo()
		}
	};
	HierarchicalLayout.prototype.goAlgo = function() {
		var self = this;
		var position = null;
		var nodes = self.nodes;
		var length = nodes.length;
		for (var i = 0; i < length; i++) {
			var n = nodes[i];
			position = n.layoutData;
			if (position == null) {
				continue
			}
			if (self.boolTransition) {
				var currentDistance = Math.abs(n.x - position.finishx);
				var nextDistance = Math.abs((n.x + position.xdistance) - position.finishx);
				if (nextDistance < currentDistance) {
					n.x += position.xdistance
				} else {
					n.x = position.finishx
				}
				currentDistance = Math.abs(n.y - position.finishy);
				nextDistance = Math.abs((n.y + position.ydistance) - position.finishy);
				if (nextDistance < currentDistance) {
					n.y += position.ydistance
				} else {
					n.y = position.finishy
				}
				if (n.x == position.finishx && n.y == position.finishy) {
					n.layoutData = null
				}
			} else {
				n.x = position.finishx;
				n.y = position.finishy;
				n.layoutData = null
			}
		}
	};
	var HiveLayout = function(nodes, links) {
		this.nodes = nodes;
		this.links = links;
		this.margin = 0;
		this.radius = 50;
		this.nlines = 5;
		this.boolTransition = true;
		this.intSteps = 50;
		this.inited = false
	};
	HiveLayout.prototype.getConfig = function() {
		return [{
			'label': '分支数',
			'nlines': 5
		}]
	};
	HiveLayout.prototype.resetConfig = function(layoutConfig) {
		if (layoutConfig) {
			this.nlines = Number(layoutConfig['nlines']) || 5
		}
		this.initAlgo()
	};
	HiveLayout.prototype.newLayoutData = function() {
		var layoutData = {
			finishx: 0.0,
			finishy: 0.0,
			xdistance: 0.0,
			ydistance: 0.0
		};
		return layoutData
	};
	HiveLayout.prototype.initAlgo = function() {
		var self = this;
		var nodeCount = Math.max(this.nodes.length * 6, 1200);
		const nodes_segment = this.nodes.length / this.nlines;
		const segment = nodeCount - (this.margin + this.radius);
		const step = segment / nodes_segment;
		const angle = 2 * Math.PI / this.nlines;
		let j = 0;
		for (let i = 0; i < this.nodes.length; ++i) {
			var node = this.nodes[i];
			var x = nodeCount + (this.radius + step * (i - j * nodes_segment)) * Math.cos(angle * j + Math.PI / 2);
			var y = nodeCount + (this.radius + step * (i - j * nodes_segment)) * Math.sin(angle * j + Math.PI / 2);
			j = Math.floor(i / nodes_segment);
			var posData = self.newLayoutData();
			posData.finishx = x;
			posData.finishy = y;
			posData.xdistance = (1.0 / self.intSteps) * (x - node.x);
			posData.ydistance = (1.0 / self.intSteps) * (y - node.y);
			node.layoutData = posData
		}
		this.inited = true
	};
	HiveLayout.prototype.runLayout = function() {
		if (this.inited) {
			this.goAlgo()
		}
	};
	HiveLayout.prototype.goAlgo = function() {
		var self = this;
		var position = null;
		var nodes = self.nodes;
		var length = nodes.length;
		for (var i = 0; i < length; i++) {
			var n = nodes[i];
			position = n.layoutData;
			if (position == null) {
				continue
			}
			if (self.boolTransition) {
				var currentDistance = Math.abs(n.x - position.finishx);
				var nextDistance = Math.abs((n.x + position.xdistance) - position.finishx);
				if (nextDistance < currentDistance) {
					n.x += position.xdistance
				} else {
					n.x = position.finishx
				}
				currentDistance = Math.abs(n.y - position.finishy);
				nextDistance = Math.abs((n.y + position.ydistance) - position.finishy);
				if (nextDistance < currentDistance) {
					n.y += position.ydistance
				} else {
					n.y = position.finishy
				}
				if (n.x == position.finishx && n.y == position.finishy) {
					n.layoutData = null
				}
			} else {
				n.x = position.finishx;
				n.y = position.finishy;
				n.layoutData = null
			}
		}
	};
	var AvoidOverlapLayout = function(nodes, links) {
		this.nodes = nodes;
		this.maxMove = 10;
		this.maxIterations = 10;
		this.runFlag = false;
		this.inited = false
	};
	AvoidOverlapLayout.prototype.runLayout = function() {
		if (this.inited) {
			this.goAlgo()
		}
	};
	AvoidOverlapLayout.prototype.getConfig = function() {
		var self = this;
		return [{
			'label': '间距',
			'maxMove': self.maxMove
		}]
	};
	AvoidOverlapLayout.prototype.resetConfig = function(layoutConfig) {
		this.initAlgo();
		if (layoutConfig) {
			this.maxMove = Number(layoutConfig['maxMove']) || 10
		}
	};
	AvoidOverlapLayout.prototype.initAlgo = function() {
		this.maxMove = 5;
		this.maxIterations = 1;
		this.runFlag = true;
		this.inited = true
	};
	AvoidOverlapLayout.prototype.goAlgo = function() {
		if (this.runFlag) {
			var totalMove = this.removeOverlaps();
			if (totalMove < 1) {
				this.runFlag = false
			}
		}
	};
	AvoidOverlapLayout.prototype.removeOverlaps = function() {
		var self = this;
		var positions = self.nodes;
		var tree = self.createTree();
		tree.init(positions.reduce(toFlatArray, []));
		var currentNode, totalMovement = 0;
		for (var i = 0; i < self.maxIterations; ++i) {
			totalMovement = 0;
			for (var index = 0; index < positions.length; index++) {
				currentNode = positions[index];
				tree.visit(visitTreeNode)
			}
			if (totalMovement < self.maxMove) break
		}
		return totalMovement;

		function visitTreeNode(node) {
			var bounds = node.bounds;
			var nodePoints = node.items;
			if (nodePoints) {
				nodePoints.forEach(moveIfNeeded)
			} else {
				var closestX = clamp(currentNode.x, bounds.left(), bounds.x + bounds.half);
				var closestY = clamp(currentNode.y, bounds.top(), bounds.y + bounds.half);
				var distanceX = currentNode.x - closestX;
				var distanceY = currentNode.y - closestY;
				var distanceSquared = (distanceX * distanceX) + (distanceY * distanceY);
				return distanceSquared < (currentNode.radius * currentNode.radius * currentNode.scaleX)
			}
		};

		function clamp(v, min, max) {
			if (v < min) return min;
			if (v > max) return max;
			return v
		};

		function moveIfNeeded(nodeIndex) {
			var otherNode = positions[nodeIndex / 2];
			if (otherNode == currentNode) return;
			var dx = currentNode.x - otherNode.x;
			var dy = currentNode.y - otherNode.y;
			var distance = Math.sqrt(dx * dx + dy * dy);
			var totalRadius = (otherNode.radius * otherNode.scaleX) + (currentNode.radius * currentNode.scaleX);
			if (totalRadius <= distance) return;
			if (distance <= 0) {
				return
			}
			var offset = (distance - totalRadius) / distance * 0.1;
			var mx = dx * offset;
			var my = dy * offset;
			currentNode.x -= mx;
			currentNode.y -= my;
			otherNode.x += mx;
			otherNode.y += my;
			totalMovement += Math.abs(mx) + Math.abs(my)
		};

		function toFlatArray(prevValue, currentValue) {
			prevValue.push(currentValue.x, currentValue.y);
			return prevValue
		}
	};
	AvoidOverlapLayout.prototype.createTree = function() {
		var queryBounds = new Bounds();
		var root;
		var originalArray;
		var api = {
			init: init,
			bounds: getBounds,
			pointsAround: getPointsAround,
			visit: visit
		};
		return api;

		function visit(cb) {
			return root.visit(cb)
		};

		function getPointsAround(x, y, half, intersectCheck) {
			if (typeof intersectCheck !== 'function') {
				intersectCheck = rectangularCheck
			}
			var indices = [];
			queryBounds.x = x;
			queryBounds.y = y;
			queryBounds.half = half;
			root.query(queryBounds, indices, originalArray, intersectCheck);
			return indices
		};

		function init(points) {
			if (!points) throw new Error('Points array is required for quadtree to work');
			if (typeof points.length !== 'number') throw new Error('Points should be array-like object');
			if (points.length % 2 !== 0) throw new Error('Points array should consist of series of x,y coordinates and be multiple of 2');
			originalArray = points;
			root = createRootNode(points);
			for (var i = 0; i < points.length; i += 2) {
				root.insert(i, originalArray)
			}
		};

		function getBounds() {
			if (!root) return EmptyRegion;
			return root.bounds
		};

		function createRootNode(points) {
			if (points.length === 0) {
				var empty = new Bounds();
				return new TreeNode(empty)
			}
			var minX = Number.POSITIVE_INFINITY;
			var minY = Number.POSITIVE_INFINITY;
			var maxX = Number.NEGATIVE_INFINITY;
			var maxY = Number.NEGATIVE_INFINITY;
			for (var i = 0; i < points.length; i += 2) {
				var x = points[i],
					y = points[i + 1];
				if (x < minX) minX = x;
				if (x > maxX) maxX = x;
				if (y < minY) minY = y;
				if (y > maxY) maxY = y
			}
			var side = Math.max(maxX - minX, maxY - minY);
			side += 2;
			minX -= 1;
			minY -= 1;
			var half = side / 2;
			var bounds = new Bounds(minX + half, minY + half, half);
			return new TreeNode(bounds)
		};

		function Bounds(x, y, half) {
			this.x = typeof x === 'number' ? x : 0;
			this.y = typeof y === 'number' ? y : 0;
			this.half = typeof half === 'number' ? half : 0;
			this.left = function() {
				return this.x - this.half
			};
			this.top = function() {
				return this.y - this.half
			};
			this.width = function() {
				return this.half * 2
			};
			this.height = function() {
				return this.half * 2
			};
			this.centerX = function() {
				return this.x
			};
			this.centerY = function() {
				return this.y
			};
			this.contains = function(x, y) {
				var half = this.half;
				return this.x - half <= x && x < this.x + half && this.y - half <= y && y < this.y + half
			}
		};

		function TreeNode(bounds) {
			this.bounds = bounds;
			this.nw = null;
			this.ne = null;
			this.sw = null;
			this.se = null;
			this.items = null;
			this.subdivide = function() {
				var bounds = this.bounds;
				var quarter = bounds.half / 2;
				this.nw = new TreeNode(new Bounds(bounds.x - quarter, bounds.y - quarter, quarter));
				this.ne = new TreeNode(new Bounds(bounds.x + quarter, bounds.y - quarter, quarter));
				this.sw = new TreeNode(new Bounds(bounds.x - quarter, bounds.y + quarter, quarter));
				this.se = new TreeNode(new Bounds(bounds.x + quarter, bounds.y + quarter, quarter))
			};
			this.insert = function(idx, array) {
				var isLeaf = this.nw === null;
				if (isLeaf) {
					if (this.items === null) {
						this.items = [idx]
					} else {
						this.items.push(idx)
					}
					if (this.items.length >= 4) {
						this.subdivide();
						for (var i = 0; i < this.items.length; ++i) {
							this.insert(this.items[i], array)
						}
						this.items = null
					}
				} else {
					var x = array[idx],
						y = array[idx + 1];
					var bounds = this.bounds;
					var quadIdx = 0;
					if (x > bounds.x) {
						quadIdx += 1
					}
					if (y > bounds.y) {
						quadIdx += 2
					}
					var child = getChild(this, quadIdx);
					child.insert(idx, array)
				}
			};
			this.visit = function(cb) {
				if (cb(this) && this.nw) {
					this.nw.visit(cb);
					this.ne.visit(cb);
					this.sw.visit(cb);
					this.se.visit(cb)
				}
			};
			this.query = function(bounds, results, sourceArray, intersects) {
				if (!intersects(this.bounds, bounds)) return;
				var items = this.items;
				if (items) {
					for (var i = 0; i < items.length; ++i) {
						var idx = items[i];
						var x = sourceArray[idx];
						var y = sourceArray[idx + 1];
						if (bounds.contains(x, y)) {
							results.push(idx)
						}
					}
				}
				if (!this.nw) return;
				this.nw.query(bounds, results, sourceArray, intersects);
				this.ne.query(bounds, results, sourceArray, intersects);
				this.sw.query(bounds, results, sourceArray, intersects);
				this.se.query(bounds, results, sourceArray, intersects)
			};

			function getChild(node, idx) {
				if (idx === 0) return node.nw;
				if (idx === 1) return node.ne;
				if (idx === 2) return node.sw;
				if (idx === 3) return node.se
			};

			function intersects(a, b) {
				return a.x - a.half < b.x + b.half && a.x + a.half > b.x - b.half && a.y - a.half < b.y + b.half && a.y + a.half > b.y - b.half
			}
		}
	};
	var TypeGatherLayout = function(nodes, links) {
		this.nodes = nodes;
		this.links = links;
		this.SPEED_DIVISOR = 800;
		this.AREA_MULTIPLICATOR = 100000;
		this.area = 2;
		this.speed = 5;
		this.inited = false
	};
	TypeGatherLayout.prototype.getConfig = function() {
		var self = this;
		return [{
			'label': '间距',
			'area': self.area
		}, {
			'label': '移动速度',
			'speed': self.speed
		}]
	};
	TypeGatherLayout.prototype.resetConfig = function(layoutConfig) {
		this.initAlgo();
		if (layoutConfig) {
			this.area = Number(layoutConfig['area']) || 2;
			this.speed = Number(layoutConfig['speed']) || 5
		}
	};
	TypeGatherLayout.prototype.initAlgo = function() {
		var self = this;
		this.area = 10000;
		this.speed = 5;
		this.nodes.forEach(function(n) {
			n.layoutData = self.newLayoutData()
		});
		this.maxDisplace = (Math.sqrt(self.AREA_MULTIPLICATOR * self.area) / 10);
		this.k = Math.sqrt((self.AREA_MULTIPLICATOR * self.area) / (1 + self.nodes.length));
		this.inited = true
	};
	TypeGatherLayout.prototype.runLayout = function() {
		if (this.inited) {
			this.goAlgo()
		}
	};
	TypeGatherLayout.prototype.goAlgo = function() {
		var self = this;
		self.repulsiveForce();
		self.attractiveForce();
		self.sameTypeAttractive();
		self.resetNodePosition()
	};
	TypeGatherLayout.prototype.repulsiveForce = function() {
		var self = this;
		self.nodes.forEach(function(N1, i) {
			self.nodes.forEach(function(N2, j) {
				if (i != j) {
					var xDist = N1.x - N2.x;
					var yDist = N1.y - N2.y;
					var dist = Math.sqrt(xDist * xDist + yDist * yDist);
					if (dist > 0) {
						var repulsiveF = self.k * self.k / dist;
						var layoutData = N1.layoutData;
						layoutData.dx += (xDist / dist * repulsiveF * 0.01);
						layoutData.dy += (yDist / dist * repulsiveF * 0.01)
					}
				}
			})
		})
	};
	TypeGatherLayout.prototype.attractiveForce = function() {
		var self = this;
		self.links.forEach(function(E) {
			var Nf = E.source;
			var Nt = E.target;
			var xDist = Nf.x - Nt.x;
			var yDist = Nf.y - Nt.y;
			var dist = Math.sqrt(xDist * xDist + yDist * yDist);
			var attractiveF = dist * dist / self.k;
			if (dist > 0) {
				var sourceLayoutData = Nf.layoutData;
				var targetLayoutData = Nt.layoutData;
				sourceLayoutData.dx -= (xDist / dist * attractiveF);
				sourceLayoutData.dy -= (yDist / dist * attractiveF);
				targetLayoutData.dx += (xDist / dist * attractiveF);
				targetLayoutData.dy += (yDist / dist * attractiveF)
			}
		})
	};
	TypeGatherLayout.prototype.sameTypeAttractive = function() {
		var self = this;
		self.nodes.forEach(function(N1, i) {
			self.nodes.forEach(function(N2, j) {
				if (i != j && N1.cluster == N2.cluster) {
					var xDist = N1.x - N2.x;
					var yDist = N1.y - N2.y;
					var dist = Math.sqrt(xDist * xDist + yDist * yDist);
					if (dist > 0) {
						var attractiveF = dist * dist / self.k;
						var sourceLayoutData = N1.layoutData;
						var targetLayoutData = N2.layoutData;
						sourceLayoutData.dx -= xDist / dist * attractiveF;
						sourceLayoutData.dy -= yDist / dist * attractiveF;
						targetLayoutData.dx += xDist / dist * attractiveF;
						targetLayoutData.dy += yDist / dist * attractiveF
					}
				}
			})
		})
	};
	TypeGatherLayout.prototype.resetNodePosition = function() {
		var self = this;
		self.nodes.forEach(function(node) {
			node.layoutData.dx *= self.speed / self.SPEED_DIVISOR;
			node.layoutData.dy *= self.speed / self.SPEED_DIVISOR;
			var layoutData = node.layoutData;
			var xDist = layoutData.dx;
			var yDist = layoutData.dy;
			var dist = Math.sqrt(layoutData.dx * layoutData.dx + layoutData.dy * layoutData.dy);
			if (dist > 0 && !node.fixed) {
				var limitedDist = Math.min(self.maxDisplace * (self.speed / self.SPEED_DIVISOR), dist);
				node.x = (node.x + xDist / dist * limitedDist);
				node.y = (node.y + yDist / dist * limitedDist)
			}
		})
	};
	TypeGatherLayout.prototype.newLayoutData = function() {
		var layoutData = {
			dx: 0.0,
			dy: 0.0
		};
		return layoutData
	};
	var layoutFac = function(_graph, config) {
		if (!_graph || _graph == null) {
			return
		}
		this.config = config || {};
		this.graph = {
			nodes: _graph.nodes || [],
			links: _graph.links || []
		}
	};
	layoutFac.prototype.createLayout = function(layoutType) {
		if (layoutType == null) {
			return null
		}
		return this.getLayout(layoutType)
	};
	layoutFac.prototype.getLayout = function(layoutType, configs) {
		var _self = this;
		var nodes = _self.graph.nodes || [];
		var links = _self.graph.links || [];
		var layout;
		switch (layoutType) {
			case "concentric":
				layout = new ConcentricLayout(nodes, links);
				break;
			case "singleCirlce":
				layout = new CircleLayout(nodes, links);
				break;
			case "dualCirlce":
				layout = new DualCircleLayout(nodes, links);
				break;
			case "layerCircle":
				layout = new LayerLayout(nodes, links);
				break;
			case "fr":
				layout = new FRlayout(nodes, links);
				break;
			case "fastFR":
				layout = new ForceD3Layout(nodes, links);
				break;
			case "frDirect":
				layout = new ForceDirected(nodes, links);
				break;
			case "fruchtermanReingold":
				layout = new FruchtermanReingoldLayout(nodes, links);
				break;
			case "spring2":
				layout = new SpringLayout2(nodes, links);
				break;
			case "kk":
				layout = new KKLayout(nodes, links);
				break;
			case "arf":
				layout = new ARFLayout(nodes, links);
				break;
			case "tree":
				layout = new TreeLayout(nodes, links);
				break;
			case "radiatree":
				layout = new RadiaTreeLayout(nodes, links);
				break;
			case "balloon":
				layout = new BalloonLayout(nodes, links);
				break;
			case "noverlap":
				layout = new AvoidOverlapLayout(nodes, links);
				break;
			case "sphere":
				layout = new SphereLayout(nodes, links);
				break;
			case "layered":
				layout = new LayeredLayout(nodes, links);
				break;
			case "topoCircle":
				layout = new TopoTreeLayout(nodes, links);
				break;
			case "hubsize":
				layout = new HierarchicalLayout(nodes, links);
				break;
			case "hive":
				layout = new HiveLayout(nodes, links);
				break;
			case "scale":
				layout = new ScaleLayout(nodes, links, 1);
				break;
			case "rotate":
				layout = new RotateLayout(nodes, links, 0);
				break;
			case "grid":
				layout = new GirdLayout(nodes, links);
				break;
			case "gather":
				layout = new TypeGatherLayout(nodes, links);
				break;
			default:
				break
		}
		if (!layout) {
			return null
		}
		return layout
	};
	var LayoutFactory = layoutFac;
	if (typeof module !== 'undefined' && typeof exports === 'object') {
		module.exports = LayoutFactory
	} else if (typeof define === 'function' && (define.amd || define.cmd)) {
		define(function() {
			return LayoutFactory
		})
	} else {
		this.LayoutFactory = LayoutFactory
	}
}).call(this || (typeof window !== 'undefined' ? window : global));
;
(function() {
	var BicomponentClusterer = function(nodes, links) {
		this.nodes = nodes;
		this.links = links;
		this.nodeIds = [];
		this.nodeNeighbers = [];
		this.dfs_num = {};
		this.high = {};
		this.parents = {};
		this.stack = [];
		this.converse_depth = 0
	};
	BicomponentClusterer.prototype.applay = function() {
		var self = this;
		if (self.nodes.length == 0) {
			return
		}
		var bicomponents = [];
		self.nodes.forEach(function(node) {
			self.dfs_num[node.id] = 0
		});
		self.converse_depth = this.nodes.length;
		self.nodes.forEach(function(node) {
			if (self.dfs_num[node.id] == 0) {
				self.converse_depth = self.nodes.length;
				self.findBiconnectedComponents(node, bicomponents);
				if (self.nodes.length - self.converse_depth == 1) {
					var s = [node];
					bicomponents.push(s)
				}
			}
		});
		var clusterNo = 1;
		var clusterResult = {};
		bicomponents.forEach(function(clusterNodes) {
			var color = randomColor();
			var clusterKey = 'cluster' + (clusterNo++);
			clusterNodes.forEach(function(node) {
				node.fillColor = color;
				node.cluster = clusterKey
			});
			clusterResult[clusterKey] = {
				'color': color,
				'size': clusterNodes.length,
				'rate': (clusterNodes.length / self.nodes.length)
			}
		});
		return clusterResult;

		function randomColor() {
			return Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random())
		}
	};
	BicomponentClusterer.prototype.findBiconnectedComponents = function(v, bicomponents) {
		var self = this;
		var v_dfs_num = self.converse_depth;
		self.dfs_num[v.id] = v_dfs_num;
		self.converse_depth--;
		self.high[v.id] = v_dfs_num;
		var neighbors = self.getNeighbors(v) || [];
		neighbors.forEach(function(w) {
			var w_dfs_num = self.dfs_num[w.id];
			var vw = self.findEdge(v, w);
			if (w_dfs_num == 0) {
				self.parents[w.id] = v.id;
				self.stack.push(vw);
				self.findBiconnectedComponents(w, bicomponents);
				var w_high = self.high[w.id] || 0;
				if (w_high <= v_dfs_num) {
					var bicomponent = [];
					var e;
					do {
						e = self.stack.pop();
						bicomponent.push(e.source);
						bicomponent.push(e.target)
					} while (e != vw);
					bicomponents.push(bicomponent)
				}
				self.high[v.id] = Math.max(w_high, self.high[v.id] || 0)
			} else if (w.id != self.parents[v.id]) {
				self.high[v.id] = Math.max(w_dfs_num, self.high[v.id] || 0)
			}
		})
	};
	BicomponentClusterer.prototype.getNeighbors = function(node) {
		var self = this;
		var nodeNeighbers = [];
		var outLinks = node.outLinks || [];
		outLinks.forEach(function(link) {
			var target = link.target;
			var source = link.source;
			if (source.id != target.id) {
				var index = self.nodeIds.indexOf(target.id);
				var childNodes = self.nodeNeighbers[index] || [];
				var childNodeIds = [];
				childNodes.forEach(function(n) {
					childNodeIds.push(n.id)
				});
				if (childNodeIds.indexOf(node.id) == -1) {
					nodeNeighbers.push(target)
				}
			}
		});
		return nodeNeighbers
	};
	BicomponentClusterer.prototype.findEdge = function(source, nodeB) {
		var link;
		(source.outLinks || []).forEach(function(_link) {
			if (_link.target.id == nodeB.id) {
				link = _link;
				return link
			}
		});
		return link
	};
	var WeakCommpentClutser = function(nodes, links) {
		this.nodes = nodes;
		this.links = links;
		this.nodeIds = [];
		this.nodeNeighbers = []
	};
	WeakCommpentClutser.prototype.applay = function() {
		var self = this;
		var unvisitedNodes = [];
		self.nodes.forEach(function(node) {
			unvisitedNodes.push(node);
			self.nodeIds.push(node.id);
			var neighbers = self.initNodeNeighbers(node);
			self.nodeNeighbers.push(neighbers)
		});
		var clusters = [];
		while (unvisitedNodes.length > 0) {
			var cluster = [];
			var root = unvisitedNodes[0];
			unvisitedNodes.splice(0, 1);
			cluster.push(root);
			var queue = [];
			queue.push(root);
			while (queue.length > 0) {
				var node = queue.splice(0, 1)[0];
				var neighbors = self.initNodeNeighbers(node);
				neighbors.forEach(function(neighbor) {
					var index = unvisitedNodes.indexOf(neighbor);
					if (index != -1) {
						queue.push(neighbor);
						unvisitedNodes.splice(index, 1);
						cluster.push(neighbor)
					}
				})
			}
			clusters.push(cluster)
		}
		var clusterNo = 1;
		var clusterResult = {};
		clusters.forEach(function(clusterNodes) {
			var color = randomColor();
			var clusterKey = 'cluster' + (clusterNo++);
			clusterNodes.forEach(function(node) {
				node.fillColor = color;
				node.cluster = clusterKey
			});
			clusterResult[clusterKey] = {
				'color': color,
				'size': clusterNodes.length,
				'rate': (clusterNodes.length / self.nodes.length)
			}
		});
		return clusterResult;

		function randomColor() {
			return Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random())
		}
	};
	WeakCommpentClutser.prototype.initNodeNeighbers = function(node) {
		var _self = this;
		var nodeNeighbers = [];
		var outLinks = node.outLinks || [];
		outLinks.forEach(function(link) {
			var target = link.target;
			var source = link.source;
			if (source.id != target.id) {
				var index = _self.nodeIds.indexOf(target.id);
				var childNodes = _self.nodeNeighbers[index] || [];
				var childNodeIds = [];
				childNodes.forEach(function(n) {
					childNodeIds.push(n.id)
				});
				if (childNodeIds.indexOf(node.id) == -1) {
					nodeNeighbers.push(target)
				}
			}
		});
		return nodeNeighbers
	};
	var NewmanCluster = function(nodes, links) {
		this.nodes = nodes;
		this.links = links
	};
	NewmanCluster.prototype.applay = function() {
		var self = this;
		if (self.nodes.length == 0) {
			return
		}
		const n = self.nodes.length;
		const m = self.links.length;
		const vertices = self.nodes;
		const ck = new Array(n);
		const nb = new Array(n * n);
		const mask = new Array(n);
		const communities = new Array(n);
		var cluster = {};
		for (let i = 0; i < n; ++i) {
			const u = vertices[i];
			communities[i] = i;
			ck[i] = (u.inLinks || []).length + (u.outLinks || []).length;
			mask[i] = false;
			for (let j = 0; j < n; ++j) {
				const v = vertices[j];
				nb[i * n + j] = self.hasEdge(v, u) || self.hasEdge(u, v) ? 1 : 0
			}
		}
		let qMax = -Infinity;
		let q = 0;
		for (let nc = n; nc > 1; --nc) {
			let deltaQMax = -Infinity;
			let fromIndex;
			let toIndex;
			for (let i = 0; i < n; ++i) {
				if (mask[i]) {
					continue
				}
				for (let j = i + 1; j < n; ++j) {
					if (mask[j]) {
						continue
					}
					const deltaQ = (nb[i * n + j] - ck[i] * ck[j] / 2 / m) / m;
					if (deltaQ > deltaQMax) {
						deltaQMax = deltaQ;
						toIndex = i;
						fromIndex = j
					}
				}
			}
			ck[toIndex] += ck[fromIndex] + nb[toIndex * n + fromIndex];
			for (let i = 0; i < n; ++i) {
				nb[toIndex * n + i] += nb[fromIndex * n + i];
				nb[i * n + toIndex] += nb[i * n + fromIndex];
				if (communities[i] === fromIndex) {
					communities[i] = toIndex
				}
			}
			mask[fromIndex] = true;
			q += deltaQMax;
			if (q > qMax) {
				qMax = q;
				for (let i = 0; i < n; ++i) {
					const u = vertices[i];
					u.cluster = communities[i];
					var clusterKey = communities[i];
					if (cluster[clusterKey] != null) {
						cluster[clusterKey].push(u)
					} else {
						cluster[clusterKey] = [u]
					}
				}
			}
		}
		var clusterNo = 1;
		var clusterResult = {};
		for (var _clusterKey in cluster) {
			var clusterNodes = cluster[_clusterKey];
			var color = randomColor();
			var clusterKey = 'cluster' + (clusterNo++);
			clusterNodes.forEach(function(node) {
				node.fillColor = color;
				node.cluster = clusterKey
			});
			clusterResult[clusterKey] = {
				'color': color,
				'size': clusterNodes.length,
				'rate': (clusterNodes.length / self.nodes.length)
			}
		}
		return clusterResult;

		function randomColor() {
			return Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random())
		}
	};
	NewmanCluster.prototype.hasEdge = function(u, v) {
		var target = null;
		(u.outLinks || []).forEach(function(l) {
			if (l.target.id == v.id) {
				target = v;
				return v
			}
		});
		return target
	};
	var ChineseWhisperCluster = function(nodes, links) {
		this.nodes = nodes
	};
	ChineseWhisperCluster.prototype.applay = function() {
		var self = this;
		var cluster = createChineseWhisper({
			nodes: this.nodes
		});
		var runFlag = true;
		var clusters = null;
		while (runFlag) {
			cluster.step();
			if (cluster.getChangeRate() == 0) {
				runFlag = false;
				clusters = cluster.createClusterMap()
			}
		}
		var clusterNo = 1;
		var clusterResult = {};
		var nodeMap = cluster.getIdMapNode();
		for (var clusterId in clusters) {
			var _nodeIds = clusters[clusterId] || [];
			var color = randomColor();
			var clusterKey = 'cluster' + (clusterNo++);
			_nodeIds.forEach(function(nodeId) {
				var node = nodeMap[nodeId];
				node.fillColor = color;
				node.cluster = clusterKey
			});
			clusterResult[clusterKey] = {
				'color': color,
				'size': _nodeIds.length,
				'rate': (_nodeIds.length / self.nodes.length)
			}
		}
		return clusterResult;

		function randomColor() {
			return Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random())
		};

		function createChineseWhisper(graph, kind) {
			var api = {
				step: step,
				getClass: getClass,
				getChangeRate: getChangeRate,
				forEachCluster: forEachCluster,
				createClusterMap: createClusterMap,
				getIdMapNode: getIdMapNode
			};
			var changeRate = 1;
			var classChangesCount = 0;
			var random = createRandom(42);
			var iterator;
			var classMap = {};
			var nodeIds = [];
			var idMapNode = {};
			var nodes = null;
			initInternalStructures();
			return api;

			function step() {
				classChangesCount = 0;
				iterator.forEach(assignHighestClass);
				changeRate = classChangesCount / nodeIds.length
			};

			function getIdMapNode() {
				return idMapNode
			};

			function getChangeRate() {
				return changeRate
			};

			function getClass(nodeId) {
				return classMap[nodeId]
			};

			function initInternalStructures() {
				nodes = graph.nodes;
				nodes.forEach(function(node) {
					classMap[node.id] = nodeIds.length;
					nodeIds.push(node.id);
					idMapNode[node.id] = node
				});
				iterator = createRandomIterator(nodeIds, random)
			};

			function assignHighestClass(nodeId) {
				var newLevel = getHighestClassInTheNeighborhoodOf(nodeId);
				var currentLevel = classMap[nodeId];
				if (newLevel !== currentLevel) {
					classMap[nodeId] = newLevel;
					classChangesCount += 1
				}
			};

			function getHighestClassInTheNeighborhoodOf(nodeId) {
				var seenClasses = {};
				var maxClassValue = 0;
				var maxClassName = -1;
				forEachLinkedNode(nodeId, visitNeighbour);
				if (maxClassName === -1) {
					return classMap[nodeId]
				}
				return maxClassName;

				function visitNeighbour(otherNode, link) {
					if (shouldUpdate(link.target.id === nodeId)) {
						var otherNodeClass = classMap[otherNode.id];
						var counter = seenClasses[otherNodeClass] || 0;
						counter += 1;
						if (counter > maxClassValue) {
							maxClassValue = counter;
							maxClassName = otherNodeClass
						}
						seenClasses[otherNodeClass] = counter
					}
				}
			};

			function shouldUpdate(isInLink) {
				if (kind === 'in') return isInLink;
				if (kind === 'out') return !isInLink;
				return true
			};

			function forEachLinkedNode(nodeId, callback, oriented) {
				var node = getNode(nodeId);
				var links = [];
				(node.outLinks || []).forEach(function(ol) {
					links.push(ol)
				});
				(node.inLinks || []).forEach(function(il) {
					links.push(il)
				});
				if (node && links && typeof callback === 'function') {
					if (oriented) {
						return forEachOrientedLink(links, nodeId, callback)
					} else {
						return forEachNonOrientedLink(links, nodeId, callback)
					}
				}
			};

			function getNode(nodeId) {
				return idMapNode[nodeId]
			};

			function forEachNonOrientedLink(links, nodeId, callback) {
				var quitFast;
				for (var i = 0; i < links.length; ++i) {
					var link = links[i];
					var linkedNodeId = link.source.id === nodeId ? link.target.id : link.source.id;
					var _node = getNode(linkedNodeId);
					quitFast = callback(_node, link);
					if (quitFast) {
						return true
					}
				}
			};

			function forEachOrientedLink(links, nodeId, callback) {
				var quitFast;
				for (var i = 0; i < links.length; ++i) {
					var link = links[i];
					if (link.source.id === nodeId) {
						quitFast = callback(nodes[link.target.id], link);
						if (quitFast) {
							return true
						}
					}
				}
			};

			function createClusterMap() {
				var clusters = {};
				for (var i = 0; i < nodeIds.length; ++i) {
					var nodeId = nodeIds[i];
					var clusterId = getClass(nodeId);
					var nodesInCluster = clusters[clusterId];
					if (nodesInCluster) nodesInCluster.push(nodeId);
					else clusters[clusterId] = [nodeId]
				}
				return clusters
			};

			function randomColor() {
				return Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random())
			};

			function forEachCluster(cb) {
				var clusters = createClusterMap();
				clusters.forEach(reportToClient);

				function reportToClient(value, key) {
					cb({
						class: key,
						nodes: value
					})
				}
			};

			function createRandom(inputSeed) {
				var seed = typeof inputSeed === 'number' ? inputSeed : (+new Date());
				var randomFunc = function() {
					seed = ((seed + 0x7ed55d16) + (seed << 12)) & 0xffffffff;
					seed = ((seed ^ 0xc761c23c) ^ (seed >>> 19)) & 0xffffffff;
					seed = ((seed + 0x165667b1) + (seed << 5)) & 0xffffffff;
					seed = ((seed + 0xd3a2646c) ^ (seed << 9)) & 0xffffffff;
					seed = ((seed + 0xfd7046c5) + (seed << 3)) & 0xffffffff;
					seed = ((seed ^ 0xb55a4f09) ^ (seed >>> 16)) & 0xffffffff;
					return (seed & 0xfffffff) / 0x10000000
				};
				return {
					next: function(maxValue) {
						return Math.floor(randomFunc() * maxValue)
					},
					nextDouble: function() {
						return randomFunc()
					}
				}
			};

			function createRandomIterator(array, customRandom) {
				var localRandom = customRandom || createRandom();
				if (typeof localRandom.next !== 'function') {
					throw new Error('customRandom does not match expected API: next() function is missing');
				}
				return {
					forEach: function(callback) {
						var i, j, t;
						for (i = array.length - 1; i > 0; --i) {
							j = localRandom.next(i + 1);
							t = array[j];
							array[j] = array[i];
							array[i] = t;
							callback(t)
						}
						if (array.length) {
							callback(array[0])
						}
					},
					shuffle: function() {
						var i, j, t;
						for (i = array.length - 1; i > 0; --i) {
							j = localRandom.next(i + 1);
							t = array[j];
							array[j] = array[i];
							array[i] = t
						}
						return array
					}
				}
			}
		}
	};
	var LouvainCluster = function(nodes, links) {
		this.nodes = nodes;
		this.links = links;
		this.idMapNode = {}
	};
	LouvainCluster.prototype.applay = function() {
		var self = this;
		var jLouvain = function() {
			var __PASS_MAX = -1;
			var __MIN = 0.0000001;
			var original_graph_nodes;
			var original_graph_edges;
			var original_graph = {};
			var partition_init;
			var edge_index = {};
			var status_listS = [];

			function make_set(array) {
				var set = {};
				array.forEach(function(d, i) {
					set[d] = true
				});
				return Object.keys(set)
			};

			function obj_values(obj) {
				var vals = [];
				for (var key in obj) {
					if (obj.hasOwnProperty(key)) {
						vals.push(obj[key])
					}
				}
				return vals
			};

			function get_degree_for_node(graph, node) {
				var neighbours = graph._assoc_mat[node] ? Object.keys(graph._assoc_mat[node]) : [];
				var weight = 0;
				neighbours.forEach(function(neighbour, i) {
					var value = graph._assoc_mat[node][neighbour] || 1;
					if (node === neighbour) {
						value *= 2
					}
					weight += value
				});
				return weight
			};

			function get_neighbours_of_node(graph, node) {
				if (typeof graph._assoc_mat[node] === 'undefined') {
					return []
				}
				var neighbours = Object.keys(graph._assoc_mat[node]);
				return neighbours
			};

			function get_edge_weight(graph, node1, node2) {
				return graph._assoc_mat[node1] ? graph._assoc_mat[node1][node2] : undefined
			};

			function get_graph_size(graph) {
				var size = 0;
				graph.edges.forEach(function(edge) {
					size += edge.weight
				});
				return size
			};

			function add_edge_to_graph(graph, edge) {
				update_assoc_mat(graph, edge);
				if (edge_index[edge.source + '_' + edge.target]) {
					graph.edges[edge_index[edge.source + '_' + edge.target]].weight = edge.weight
				} else {
					graph.edges.push(edge);
					edge_index[edge.source + '_' + edge.target] = graph.edges.length - 1
				}
			};

			function make_assoc_mat(edge_list) {
				var mat = {};
				edge_list.forEach(function(edge, i) {
					mat[edge.source] = mat[edge.source] || {};
					mat[edge.source][edge.target] = edge.weight;
					mat[edge.target] = mat[edge.target] || {};
					mat[edge.target][edge.source] = edge.weight
				});
				return mat
			};

			function update_assoc_mat(graph, edge) {
				graph._assoc_mat[edge.source] = graph._assoc_mat[edge.source] || {};
				graph._assoc_mat[edge.source][edge.target] = edge.weight;
				graph._assoc_mat[edge.target] = graph._assoc_mat[edge.target] || {};
				graph._assoc_mat[edge.target][edge.source] = edge.weight
			};

			function clone(obj) {
				if (obj === null || typeof(obj) !== 'object') return obj;
				var temp = obj.constructor();
				for (var key in obj) {
					temp[key] = clone(obj[key])
				}
				return temp
			};

			function init_status(graph, status, part) {
				status['nodes_to_com'] = {};
				status['total_weight'] = 0;
				status['internals'] = {};
				status['degrees'] = {};
				status['gdegrees'] = {};
				status['loops'] = {};
				status['total_weight'] = get_graph_size(graph);
				if (typeof part === 'undefined') {
					graph.nodes.forEach(function(node, i) {
						status.nodes_to_com[node] = i;
						var deg = get_degree_for_node(graph, node);
						if (deg < 0) throw 'Bad graph type, use positive weights!';
						status.degrees[i] = deg;
						status.gdegrees[node] = deg;
						status.loops[node] = get_edge_weight(graph, node, node) || 0;
						status.internals[i] = status.loops[node]
					})
				} else {
					graph.nodes.forEach(function(node, i) {
						var com = part[node];
						status.nodes_to_com[node] = com;
						var deg = get_degree_for_node(graph, node);
						status.degrees[com] = (status.degrees[com] || 0) + deg;
						status.gdegrees[node] = deg;
						var inc = 0.0;
						var neighbours = get_neighbours_of_node(graph, node);
						neighbours.forEach(function(neighbour, i) {
							var weight = graph._assoc_mat[node][neighbour];
							if (weight <= 0) {
								throw "Bad graph type, use positive weights";
							}
							if (part[neighbour] === com) {
								if (neighbour === node) {
									inc += weight
								} else {
									inc += weight / 2.0
								}
							}
						});
						status.internals[com] = (status.internals[com] || 0) + inc
					})
				}
			};

			function __modularity(status) {
				var links = status.total_weight;
				var result = 0.0;
				var communities = make_set(obj_values(status.nodes_to_com));
				communities.forEach(function(com, i) {
					var in_degree = status.internals[com] || 0;
					var degree = status.degrees[com] || 0;
					if (links > 0) {
						result = result + in_degree / links - Math.pow((degree / (2.0 * links)), 2)
					}
				});
				return result
			};

			function __neighcom(node, graph, status) {
				var weights = {};
				var neighboorhood = get_neighbours_of_node(graph, node);
				neighboorhood.forEach(function(neighbour, i) {
					if (neighbour !== node) {
						var weight = graph._assoc_mat[node][neighbour] || 1;
						var neighbourcom = status.nodes_to_com[neighbour];
						weights[neighbourcom] = (weights[neighbourcom] || 0) + weight
					}
				});
				return weights
			};

			function __insert(node, com, weight, status) {
				status.nodes_to_com[node] = +com;
				status.degrees[com] = (status.degrees[com] || 0) + (status.gdegrees[node] || 0);
				status.internals[com] = (status.internals[com] || 0) + weight + (status.loops[node] || 0)
			};

			function __remove(node, com, weight, status) {
				status.degrees[com] = ((status.degrees[com] || 0) - (status.gdegrees[node] || 0));
				status.internals[com] = ((status.internals[com] || 0) - weight - (status.loops[node] || 0));
				status.nodes_to_com[node] = -1
			};

			function __renumber(dict) {
				var count = 0;
				var ret = clone(dict);
				var new_values = {};
				var dict_keys = Object.keys(dict);
				dict_keys.forEach(function(key) {
					var value = dict[key];
					var new_value = typeof new_values[value] === 'undefined' ? -1 : new_values[value];
					if (new_value === -1) {
						new_values[value] = count;
						new_value = count;
						count = count + 1
					}
					ret[key] = new_value;
					status_listS.push([clone(ret)])
				});
				return ret
			};

			function __one_level(graph, status) {
				var modif = true;
				var nb_pass_done = 0;
				var cur_mod = __modularity(status);
				var new_mod = cur_mod;
				while (modif && nb_pass_done !== __PASS_MAX) {
					cur_mod = new_mod;
					modif = false;
					nb_pass_done += 1;
					graph.nodes.forEach(function(node, i) {
						var com_node = status.nodes_to_com[node];
						var degc_totw = (status.gdegrees[node] || 0) / (status.total_weight * 2.0);
						var neigh_communities = __neighcom(node, graph, status);
						__remove(node, com_node, (neigh_communities[com_node] || 0.0), status);
						var best_com = com_node;
						var best_increase = 0;
						var neigh_communities_entries = Object.keys(neigh_communities);
						neigh_communities_entries.forEach(function(com, i) {
							var incr = neigh_communities[com] - (status.degrees[com] || 0.0) * degc_totw;
							if (incr > best_increase) {
								best_increase = incr;
								best_com = com
							}
						});
						__insert(node, best_com, neigh_communities[best_com] || 0, status);
						if (best_com !== com_node) {
							modif = true
						}
					});
					new_mod = __modularity(status);
					if (new_mod - cur_mod < __MIN) {
						break
					}
				}
			};

			function induced_graph(partition, graph) {
				var ret = {
					nodes: [],
					edges: [],
					_assoc_mat: {}
				};
				var w_prec, weight;
				var partition_values = obj_values(partition);
				ret.nodes = ret.nodes.concat(make_set(partition_values));
				graph.edges.forEach(function(edge, i) {
					weight = edge.weight || 1;
					var com1 = partition[edge.source];
					var com2 = partition[edge.target];
					w_prec = (get_edge_weight(ret, com1, com2) || 0);
					var new_weight = (w_prec + weight);
					add_edge_to_graph(ret, {
						'source': com1,
						'target': com2,
						'weight': new_weight
					})
				});
				edge_index = {};
				return ret
			};

			function partition_at_level(dendogram, level) {
				var partition = clone(dendogram[0]);
				for (var i = 1; i < level + 1; i++) {
					Object.keys(partition).forEach(function(key, j) {
						var node = key;
						var com = partition[key];
						partition[node] = dendogram[i][com]
					})
				}
				return partition
			};

			function generate_dendogram(graph, part_init) {
				if (graph.edges.length === 0) {
					var part = {};
					graph.nodes.forEach(function(node, i) {
						part[node] = node
					});
					return part
				}
				var status = {};
				init_status(original_graph, status, part_init);
				var mod = __modularity(status);
				var status_list = [];
				__one_level(original_graph, status);
				var new_mod = __modularity(status);
				var partition = __renumber(status.nodes_to_com);
				status_list.push(partition);
				mod = new_mod;
				var current_graph = induced_graph(partition, original_graph);
				init_status(current_graph, status);
				while (true) {
					__one_level(current_graph, status);
					new_mod = __modularity(status);
					status_listS.push(clone(status_list));
					if (new_mod - mod < __MIN) {
						break
					}
					partition = __renumber(status.nodes_to_com);
					status_list.push(partition);
					mod = new_mod;
					current_graph = induced_graph(partition, current_graph);
					init_status(current_graph, status)
				}
				return status_list
			};
			var dendogramS = {};
			var core = function() {
				var status = {};
				var dendogram = generate_dendogram(original_graph, partition_init);
				dendogramS = dendogram;
				return partition_at_level(dendogram, dendogram.length - 1)
			};
			var nextS = -1;
			core.resetAll = function() {
				nextS = -1;
				status_listS = []
			};
			core.nextStep = function() {
				if (nextS == -1) {
					var dendogram = generate_dendogram(original_graph, partition_init);
					dendogramS = clone(dendogram)
				}
				if (nextS < status_listS.length) {
					nextS += 1;
					if (status_listS[nextS] == undefined) {
						return partition_at_level(status_listS[nextS - 1], status_listS[nextS - 1].length - 1)
					}
					return partition_at_level(status_listS[nextS], status_listS[nextS].length - 1)
				} else {
					return undefined
				}
			};
			core.nodes = function(nds) {
				if (arguments.length > 0) {
					original_graph_nodes = nds
				}
				return core
			};
			core.edges = function(edgs) {
				if (typeof original_graph_nodes === 'undefined') throw 'Please provide the graph nodes first!';
				if (arguments.length > 0) {
					original_graph_edges = edgs;
					var assoc_mat = make_assoc_mat(edgs);
					original_graph = {
						'nodes': original_graph_nodes,
						'edges': original_graph_edges,
						'_assoc_mat': assoc_mat
					}
				}
				return core
			};
			core.partition_init = function(prttn) {
				if (arguments.length > 0) {
					partition_init = prttn
				}
				return core
			};
			return core
		};

		function randomColor() {
			return Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random())
		};
		var node_data = [],
			edge_data = [];
		self.nodes.forEach(function(node) {
			node_data.push(node.id);
			self.idMapNode[node.id] = node
		});
		self.links.forEach(function(link) {
			edge_data.push({
				source: link.source.id,
				target: link.target.id,
				weight: link.weight
			})
		});
		var community = jLouvain().nodes(node_data).edges(edge_data);
		var runFlag = true;
		var befor_community_result, community_assignment_result;
		while (runFlag) {
			community_assignment_result = community.nextStep();
			if (community_assignment_result == undefined) {
				runFlag = false
			} else {
				befor_community_result = community_assignment_result
			}
		}
		communities = {};
		Object.keys(befor_community_result).forEach(function(k) {
			if (befor_community_result[k] in communities) {
				communities[befor_community_result[k]].push(k)
			} else {
				communities[befor_community_result[k]] = [k]
			}
		});
		var clusterNo = 1;
		var clusterResult = {};
		for (var clusterId in communities) {
			var _nodeIds = communities[clusterId] || [];
			var color = randomColor();
			var clusterKey = 'cluster' + (clusterNo++);
			_nodeIds.forEach(function(nodeId) {
				var node = self.idMapNode[nodeId];
				node.fillColor = color;
				node.cluster = clusterKey
			});
			clusterResult[clusterKey] = {
				'color': color,
				'size': _nodeIds.length,
				'rate': (_nodeIds.length / self.nodes.length)
			}
		}
		return clusterResult
	};
	var KMeansCluster = function(nodes) {
		this.nodes = nodes;
		this.centroids = [];
		this.numClusters = 5;
		this.colors = []
	};
	KMeansCluster.prototype.applay = function(config) {
		var self = this;
		if (config) {
			this.numClusters = Number(config['numClusters'] || 5)
		}
		this.init();
		this.clustering();
		this.centroids = this.updateCentroids();
		this.clustering();
		var clusters = {};
		this.nodes.forEach(function(node) {
			var clusterId = node.clusterId;
			if (clusterId >= 0) {
				var clusterNodes = clusters[clusterId];
				if (clusterNodes) {
					clusterNodes.push(node)
				} else {
					clusterNodes = [node]
				}
				clusters[clusterId] = clusterNodes
			}
		});
		var clusterNo = 1;
		var clusterResult = {};
		for (var _clusterKey in clusters) {
			var clusterNodes = clusters[_clusterKey];
			var color = randomColor();
			var clusterKey = 'cluster' + (clusterNo++);
			clusterNodes.forEach(function(node) {
				node.fillColor = color;
				node.cluster = clusterKey
			});
			clusterResult[clusterKey] = {
				'color': color,
				'size': clusterNodes.length,
				'rate': (clusterNodes.length / self.nodes.length)
			}
		}
		return clusterResult;

		function randomColor() {
			return Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random()) + "," + Math.floor(255 * Math.random())
		}
	};
	KMeansCluster.prototype.init = function(u, v) {
		var self = this;
		this.centroids = [];
		this.numClusters = this.numClusters;
		this.colors = [];
		var minX = Number.MAX_VALUE,
			maxX = Number.MIN_VALUE,
			minY = Number.MAX_VALUE,
			maxY = Number.MIN_VALUE;
		for (i = 0; i < self.nodes.length; i++) {
			var node = self.nodes[i];
			node.clusterId = null;
			minX = Math.min(minX, node.x);
			maxX = Math.max(minX, node.x);
			minY = Math.min(minY, node.y);
			maxY = Math.max(maxY, node.y)
		}
		var width = Math.abs(maxX - minX);
		var height = Math.abs(maxY - minY);
		var x, y, i;
		for (i = 0; i < self.numClusters; i++) {
			x = Math.floor(Math.random() * width);
			y = Math.floor(Math.random() * height);
			self.centroids.push({
				x: x,
				y: y,
				clusterId: i
			})
		}
	};
	KMeansCluster.prototype.clustering = function() {
		var self = this;
		var i, j;
		for (i = 0; i < self.centroids.length; i++) {
			self.centroids[i].bestMatches = []
		}
		for (j = 0; j < self.nodes.length; j++) {
			var p = self.nodes[j];
			var bestMatch = 0;
			var bestMatchDist = self.getSquareDistance(p, self.centroids[bestMatch]);
			for (i = 1; i < self.centroids.length; i++) {
				var d = self.getSquareDistance(p, self.centroids[i]);
				if (d < bestMatchDist) {
					bestMatch = i;
					bestMatchDist = d
				}
			}
			self.centroids[bestMatch].bestMatches.push(j);
			self.nodes[j].clusterId = bestMatch
		}
	};
	KMeansCluster.prototype.updateCentroids = function() {
		var self = this;
		var newCentroids = [];
		for (var j = 0; j < self.centroids.length; j++) {
			if (self.centroids[j].bestMatches.length > 0) {
				var ax = 0;
				var ay = 0;
				var bestMatches = self.centroids[j].bestMatches;
				for (var i = 0; i < bestMatches.length; i++) {
					var p = self.nodes[bestMatches[i]];
					ax += p.x;
					ay += p.y
				}
				ax /= bestMatches.length;
				ay /= bestMatches.length;
				newCentroids.push({
					x: ax,
					y: ay,
					clusterId: j
				})
			} else {
				newCentroids.push(self.centroids[j])
			}
		}
		return newCentroids
	};
	KMeansCluster.prototype.getSquareDistance = function(p1, p2) {
		var dx = p2.x - p1.x;
		var dy = p2.y - p1.y;
		return dx * dx + dy * dy
	};
	KMeansCluster.prototype.hsv2rgb = function(h, s, v) {
		var r, g, b;
		if (s === 0) {
			var val = Math.round(v);
			return styleRGB(val, val, val)
		}
		if (h < 0) {
			h += 360
		}
		h = h % 360;
		s = s / 255;
		var hi = Math.floor(h / 60) % 6;
		var f = (h / 60) - hi;
		var p = Math.round(v * (1 - s));
		var q = Math.round(v * (1 - f * s));
		var t = Math.round(v * (1 - (1 - f) * s));
		switch (hi) {
			case 0:
				r = v;
				g = t;
				b = p;
				break;
			case 1:
				r = q;
				g = v;
				b = p;
				break;
			case 2:
				r = p;
				g = v;
				b = t;
				break;
			case 3:
				r = p;
				g = q;
				b = v;
				break;
			case 4:
				r = t;
				g = p;
				b = v;
				break;
			case 5:
				r = v;
				g = p;
				b = q;
				break;
			default:
				break
		}
		return r + ',' + g + ',' + b
	};
	var ClusterFac = function(_graph) {
		if (!_graph || _graph == null) {
			return
		}
		this.graph = {
			nodes: _graph.nodes || [],
			links: _graph.links || []
		}
	};
	ClusterFac.prototype.createClutser = function(clusterType) {
		if (clusterType == null) {
			return
		}
		return this.getCluster(clusterType)
	};
	ClusterFac.prototype.getCluster = function(clusterType) {
		var _self = this;
		var nodes = _self.graph.nodes || [];
		var links = _self.graph.links || [];
		var cluster;
		switch (clusterType) {
			case 'bicomponet':
				cluster = new BicomponentClusterer(nodes, links);  //todo 聚类设置
				break;
			case 'weakcommpent':
				cluster = new WeakCommpentClutser(nodes, links);
				break;
			case 'newman':
				cluster = new NewmanCluster(nodes, links);
				break;
			case 'chinesewisper':
				cluster = new ChineseWhisperCluster(nodes, links);
				break;
			case 'louvain':
				cluster = new LouvainCluster(nodes, links);
				break;
			case 'kmeans':
				cluster = new KMeansCluster(nodes, links);
				break;
			default:
				break
		}
		if (!cluster) {
			return
		}
		return cluster
	};
	var ClusterFactory = ClusterFac;
	if (typeof module !== 'undefined' && typeof exports === 'object') {
		module.exports = ClusterFactory
	} else if (typeof define === 'function' && (define.amd || define.cmd)) {
		define(function() {
			return ClusterFactory
		})
	} else {
		this.ClusterFactory = ClusterFactory
	}
}).call(this || (typeof window !== 'undefined' ? window : global));
