(async _ => {
  Object.mergify = (main, ...subs) => {
    for (let obj of subs) for (let attrname in obj) main[attrname] = obj[attrname]
    return main
  }

  // Particle animated background.
  ((a, b) => {
    function c(a) {
      a = a || new Object()
      for (let b = 1; b < arguments.length; b++) {
        let c = arguments[b]
        if (c) for (let d in c) c.hasOwnProperty(d) && (`object` == typeof c[d] ? deepExtend(a[d], c[d]) : a[d] = c[d])
      }
      return a
    }

    function d(d, g) {
      function h() {
        if (y) {
          r = b.createElement(`canvas`)
          r.className = `particles`
          r.style.display = `block`
          d.insertBefore(r, d.firstChild)
          s = r.getContext(`2d`)
          i()
          for (let c = Math.round(r.width * r.height / g.density), e = 0; c > e; e++) {
            let f = new n
            f.setStackPos(e), z.push(f)
          }
          a.addEventListener(`resize`, _ => k(), !1)
          b.addEventListener(`mousemove`, a => { A = a.pageX, B = a.pageY }, !1)
          D && !C && a.addEventListener(`deviceorientation`, _ => { F = Math.min(-30, 30), E = Math.min(-30, 30) }, !0)
          j()
          q(`onInit`)
        }
      }

      function i() { r.width = d.offsetWidth, r.height = d.offsetHeight, s.fillStyle = g.dotColor, s.strokeStyle = g.lineColor, s.lineWidth = g.lineWidth }

      function j() {
        if (y) {
          u = a.innerWidth, v = a.innerHeight, s.clearRect(0, 0, r.width, r.height)
          for (let b = 0; b < z.length; b++) z[b].updatePosition()
          for (let b = 0; b < z.length; b++) z[b].draw()
          G || (t = requestAnimationFrame(j))
        }
      }

      function k() {
        i()
        for (let a = d.offsetWidth, b = d.offsetHeight, c = z.length - 1; c >= 0; c--)(z[c].position.x > a || z[c].position.y > b) && z.splice(c, 1)
        let e = Math.round(r.width * r.height / g.density)
        if (e > z.length)
          for (; e > z.length;) {
            let f = new n
            z.push(f)
          } else e < z.length && z.splice(e)
        for (c = z.length - 1; c >= 0; c--) z[c].setStackPos(c)
      }

      function l() { G = !0 }

      function m() { G = !1, j() }

      function n() {
        switch (this.stackPos, this.active = !0, this.layer = Math.ceil(3 * Math.random()), this.parallaxOffsetX = 0, this.parallaxOffsetY = 0, this.position = { x: Math.ceil(Math.random() * r.width), y: Math.ceil(Math.random() * r.height) }, this.speed = new Object(), g.directionX) {
          case `left`: {
            this.speed.x = +(-g.maxSpeedX + Math.random() * g.maxSpeedX - g.minSpeedX).toFixed(2)
            break
          }
          case `right`: {
            this.speed.x = +(Math.random() * g.maxSpeedX + g.minSpeedX).toFixed(2)
            break
          }
          default: {
            this.speed.x = +(-g.maxSpeedX / 2 + Math.random() * g.maxSpeedX).toFixed(2), this.speed.x += this.speed.x > 0 ? g.minSpeedX : -g.minSpeedX
            break
          }
        }
        switch (g.directionY) {
          case `up`: {
            this.speed.y = +(-g.maxSpeedY + Math.random() * g.maxSpeedY - g.minSpeedY).toFixed(2)
            break
          }
          case `down`: {
            this.speed.y = +(Math.random() * g.maxSpeedY + g.minSpeedY).toFixed(2)
            break
          }
          default: {
            this.speed.y = +(-g.maxSpeedY / 2 + Math.random() * g.maxSpeedY).toFixed(2), this.speed.x += this.speed.y > 0 ? g.minSpeedY : -g.minSpeedY
            break
          }
        }
      }

      function o(a, b) { return b ? void (g[a] = b) : g[a] }

      function p() { r.parentNode.removeChild(r), q(`onDestroy`), f && f(d).removeData(`plugin_${e}`) }

      function q(a) { void 0 !== g[a] && g[a].call(d) }
      let [y, z, A, B, C, D, E, F, G, r, s, u, v, w, x] = [!!b.createElement(`canvas`).getContext, new Array(), 0, 0, !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), !!a.DeviceOrientationEvent, 0, 0, !1]
      return g = c(new Object(), a[e].defaults, g),
        n.prototype.draw = function () {
          s.beginPath(), s.arc(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY, g.particleRadius / 2, 0, 2 * Math.PI, !0), s.closePath(), s.fill(), s.beginPath();
          for (let a = z.length - 1; a > this.stackPos; a--) {
            let b = z[a], [c, d] = [this.position.x - b.position.x, this.position.y - b.position.y], e = Math.sqrt(c * c + d * d).toFixed(2)
            e < g.proximity && (s.moveTo(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY), g.curvedLines ? s.quadraticCurveTo(Math.max(b.position.x, b.position.x), Math.min(b.position.y, b.position.y), b.position.x + b.parallaxOffsetX, b.position.y + b.parallaxOffsetY) : s.lineTo(b.position.x + b.parallaxOffsetX, b.position.y + b.parallaxOffsetY))
          }
          s.stroke(), s.closePath()
        }, n.prototype.updatePosition = function () {
          if (g.parallax) {
            if (D && !C) {
              let a = (u - 0) / 60
              w = (E - -30) * a + 0
              let b = (v - 0) / 60
              x = (F - -30) * b + 0
            } else w = A, x = B
            this.parallaxTargX = (w - u / 2) / (g.parallaxMultiplier * this.layer), this.parallaxOffsetX += (this.parallaxTargX - this.parallaxOffsetX) / 10, this.parallaxTargY = (x - v / 2) / (g.parallaxMultiplier * this.layer), this.parallaxOffsetY += (this.parallaxTargY - this.parallaxOffsetY) / 10
          }
          let [c, e] = [d.offsetWidth, d.offsetHeight]
          switch (g.directionX) {
            case `left`: {
              this.position.x + this.speed.x + this.parallaxOffsetX < 0 && (this.position.x = c - this.parallaxOffsetX)
              break
            }
            case `right`: {
              this.position.x + this.speed.x + this.parallaxOffsetX > c && (this.position.x = 0 - this.parallaxOffsetX)
              break
            }
            default: {
              (this.position.x + this.speed.x + this.parallaxOffsetX > c || this.position.x + this.speed.x + this.parallaxOffsetX < 0) && (this.speed.x = -this.speed.x)
              break
            }
          }
          switch (g.directionY) {
            case `up`: {
              this.position.y + this.speed.y + this.parallaxOffsetY < 0 && (this.position.y = e - this.parallaxOffsetY)
              break
            }
            case `down`: {
              this.position.y + this.speed.y + this.parallaxOffsetY > e && (this.position.y = 0 - this.parallaxOffsetY)
              break
            }
            default: {
              (this.position.y + this.speed.y + this.parallaxOffsetY > e || this.position.y + this.speed.y + this.parallaxOffsetY < 0) && (this.speed.y = -this.speed.y)
              break
            }
          }
          this.position.x += this.speed.x, this.position.y += this.speed.y
        },
        n.prototype.setStackPos = function (a) { this.stackPos = a },
        h(),
      {
        option: o,
        destroy: p,
        start: m,
        pause: l
      }
    }
    let [e, f] = [`particleground`, a.jQuery]
    a[e] = (a, b) => new d(a, b)
    a[e].defaults = { minSpeedX: .1, maxSpeedX: .7, minSpeedY: .1, maxSpeedY: .7, directionX: `center`, directionY: `center`, density: 1e4, dotColor: `#FEFEFE`, lineColor: `#FEFEFE`, particleRadius: 7, lineWidth: 1, curvedLines: !1, proximity: 100, parallax: !0, parallaxMultiplier: 5, onInit: _ => { }, onDestroy: _ => { } }
    f && (f.fn[e] = a => {
      if (`string` === typeof arguments[0]) {
        let [c, g, b] = [arguments[0], Array.prototype.slice.call(arguments, 1)]
        return this.each(_ => f.data(this, `plugin_${e}`) && `function` == typeof f.data(this, `plugin_${e}`)[c] && (b = f.data(this, `plugin_${e}`)[c].apply(this, g))), void 0 !== b ? b : this
      }
      return `object` != typeof a && a ? void 0 : this.each(_ => f.data(this, `plugin_${e}`) || f.data(this, `plugin_${e}`, new d(this, a)))
    })
  })(window, document)

  for (element of document.getElementsByClassName(`waitload`) || []) element.innerHTML = `<div class=\"loader\"></div>`

  for (element of document.getElementsByClassName(`particle`) || []) element.innerHTML = `<div class=\"particles-background\"></div><div class=\"particles-foreground\"></div>`

  for (element of document.getElementsByClassName(`particles-foreground`) || []) particleground(element, { dotColor: `rgba(255, 255, 255, 1)`, lineColor: `rgba(255, 255, 255, 0.05)`, minSpeedX: 0.3, maxSpeedX: 0.6, minSpeedY: 0.3, maxSpeedY: 0.6, density: 50000, curvedLines: false, proximity: 250, parallaxMultiplier: 10, particleRadius: 4, })

  for (element of document.getElementsByClassName(`particles-background`) || []) particleground(element, { dotColor: `rgba(255, 255, 255, 0.5)`, lineColor: `rgba(255, 255, 255, 0.05)`, minSpeedX: 0.075, maxSpeedX: 0.15, minSpeedY: 0.075, maxSpeedY: 0.15, density: 30000, curvedLines: false, proximity: 20, parallaxMultiplier: 20, particleRadius: 6, })

  let url = new URL(window.location.href).searchParams

  switch (url.get(`to`)) {
    case `project`: {
      location.href = `https://hacking-with-ht.ml/kurasad/project`
      break
    }
    case `share`: {
      location.href = `https://hacking-with-ht.ml/sharing`
      break
    }
    case `support`: {
      location.href = `https://discord.gg/H5PwwSJ`
      break
    }
  }

  for (element of document.getElementsByClassName(`particle`) || []) element.oncontextmenu = e => { e.preventDefault(), e.stopPropagation() }
  for (element of document.getElementsByClassName(`avatar`) || []) element.innerHTML = `<img title="Kurasad PFP" alt="Kurasad PFP" />`
  for (element of document.getElementsByClassName(`gituser`) || []) element.innerHTML = `<a href="https://github.com/DPulavarthy"><img title="GitHub" alt="GitHub" />`
  for (element of document.getElementsByClassName(`patreon`) || []) element.innerHTML = `<a href="https://www.patreon.com/jonin"><img title="Patreon" alt="Patreon" />`
  for (element of document.getElementsByClassName(`twitter`) || []) element.innerHTML = `<a href="https://twitter.com/iKurasad"><img title="Twitter" alt="Twitter" />`
  for (element of document.getElementsByClassName(`kurasad`) || []) element.innerHTML = `<a href="https://dsc.bio/kurasad"><img title="Discord" alt="Discord" />`

  for (let i = 0; i < document.links.length; i++) document.links[i].hostname !== window.location.hostname ? (document.links[i].target = `_blank`, document.links[i].rel = `noopener`) : null
  document.querySelectorAll(`a`).forEach(e => e.setAttribute(`tabindex`, `-1`))

  let [guilds, members, lastUpdated] = [localStorage.getItem(`kurasad-guilds`), localStorage.getItem(`kurasad-members`), localStorage.getItem(`kurasad-lastUpdated`)]

  if (!guilds || !members || !lastUpdated) update()
  else run(guilds, members, lastUpdated)

  function run(guilds, member, lastUpdated) {
    if (!guilds || !member || !lastUpdated) return
    if (new Date().getTime() - lastUpdated > 1000 * 60 * 30) return update()
    let stringify = _ => `Website last updated: <a style="color:#E18499;display:contents;">${format(new Date().getTime() - lastUpdated)} ago</a>`
    for (element of document.getElementsByClassName(`guilds`) || []) element.innerHTML = guilds
    for (element of document.getElementsByClassName(`member`) || []) element.innerHTML = member
    let since = document.getElementById(`since`)
    since.innerHTML = stringify()
    setInterval(_ => since.innerHTML = stringify(), 1000)
  }

  async function update() {
    let response = await fetch(`http://51.222.133.19:8888/data`),
      body = await response.json()
    console.log(body)
    localStorage.setItem(`kurasad-guilds`, body.guilds)
    localStorage.setItem(`kurasad-members`, body.members)
    localStorage.setItem(`kurasad-lastUpdated`, new Date().getTime())
    run(body.guilds, body.members, localStorage.getItem(`kurasad-lastUpdated`))
  }

  function format(duration) {
    let secs = duration / 1000, sec_num = parseInt(secs, 10), hours = Math.floor(sec_num / 3600), minutes = Math.floor((sec_num - (hours * 3600)) / 60), seconds = sec_num - (hours * 3600) - (minutes * 60)
    if (hours < 10) hours = `0${hours}`
    if (minutes < 10) minutes = `0${minutes}`
    if (seconds < 10) seconds = `0${seconds}`
    return `${parseInt(hours) > 0 ? `${hours} Hour${parseInt(hours) !== 1 ? `s` : ``}${parseInt(minutes) > 0 ? `, ` : ``}` : ``}${parseInt(minutes) > 0 ? `${minutes} Minute${parseInt(minutes) !== 1 ? `s` : ``}${parseInt(seconds) > 0 ? `, ` : ``}` : ``}${parseInt(seconds) > 0 ? `${seconds} Second${parseInt(seconds) !== 1 ? `s` : ``}` : ``}`
  }

  document.onkeydown = evt => {
    evt = evt || window.event
    if (evt.key === `Escape`) document.getElementById(`menu`).checked = false
  }

  window.onload = _ => { for (element of document.getElementsByClassName(`waitload`) || []) setTimeout(_ => Object.mergify(element.style, { opacity: 0, pointerEvents: `none` }), 1000) }
})()

let reset = _ => {
  if (confirm(`Are you sure you want to reset site data?`)) {
    localStorage.removeItem(`kurasad-guilds`)
    localStorage.removeItem(`kurasad-members`)
    localStorage.removeItem(`kurasad-lastUpdated`)
    window.location.reload()
    window.location.reload()
  }
}

let escape = _ => document.getElementById(`menu`).checked = false