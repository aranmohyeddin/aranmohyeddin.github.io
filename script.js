const level = {
  1: {radius: 60},
  2: {radius: 40, parentEdgeValue: 5},
  3: {radius: 35, parentEdgeValue: 4},
  4: {radius: 30, parentEdgeValue: 3},
  5: {radius: 25, parentEdgeValue: 2},
  6: {radius: 20, parentEdgeValue: 1},
};
const desc = {
  me: "Hey! I'm Aran.",
  cv: 'You can download a more formal resume <a href="cv.pdf">here</a>',
  work: 'B.Sc. Software Engineering, 2015-2019',
  edu: 'B.Sc. Software Engineering, 2015-2019',
  sampad: 'Studied in Allame Helli 1 Highschool 2011-2013',
  sharif: 'B.Sc. Software Engineering, 2015-2019',
  eleos: 'Technical Manager at Eleos since 2019',
  glassacademy: 'CEO at <a href="http://glassacademy.ir/">glassacademy</a> since 2018',

  aic: 'Sharif AIChallange 2018 DevOps team.',
  gmail: 'rnmhdn@gmail.com',
  twitter: '<a href="https://twitter.com/aranmohyeddin">@aranmohyeddin</a>',
  instagram: '<a href="https://instagram.com/aran_mhdn">Instagram</a>',
  stackoverflow:
    '<a href="https://stackoverflow.com/users/5120089/yukashima-huksay">Stackoverflow</a>',
  github: '<a href="https://github.com/aranmohyeddin/">Github</a>',
  glass_front: 'Front-End Developer',
  glass_backend: 'Back-End Developer',
  eleos_front: 'Front-End Developer',
  eleos_backend: 'Back-End Developer',
  ysc2: 'Achieved second silver in 25td Iranian National Olympiad in Mathematics',
  ysc1:
    'Achieved dimloma in 24th Iranian National Olympiad in Mathematics<br/> Became a member of young scholars club',
  itym:
    "Was selected as a member of Iran's team for ITYM2016<br/>Received a silver medal in the competition.",
  helliChair:
    'Built an online strategic riddle answering game. Using PHP, Javascript, MySql and bare hands!',
};
const boil = (id, lvl) => ({
  id: id,
  picture: `./images/${id}.jpg`,
  fill: `url(#${id})`,
  desc: desc[id],
  ...level[lvl],
  children: [],
});

var _ = {
  me: {...boil('me', 1), delay: 200},

  cv: {...boil('cv', 2), delay: 500},
  social: boil('social', 2),
  arch: boil('arch', 2),

  edu: boil('edu', 3),
  work: boil('work', 3),

  sampad: boil('sampad', 4),
  sharif: boil('sharif', 4),
  glassacademy: boil('glassacademy', 4),
  eleos: boil('eleos', 4),

  helliChair: boil('helliChair', 5),
  itym: boil('itym', 5),
  ysc1: boil('ysc1', 5),
  ysc2: boil('ysc2', 5),

  glass_backend: boil('glass_backend', 5),
  eleos_backend: boil('eleos_backend', 5),
  glass_front: boil('glass_front', 5),
  eleos_front: boil('eleos_front', 5),

  aic: boil('aic', 5),
  gmail: boil('gmail', 5),
  github: boil('github', 5),
  twitter: boil('twitter', 5),
  instagram: boil('instagram', 5),
  stackoverflow: boil('stackoverflow', 5),

  nativescript: boil('nativescript', 6),
  kubernetes: boil('kubernetes', 6),
  electronjs: boil('electronjs', 6),
  highcharts: boil('highcharts', 6),
  expressjs: boil('expressjs', 6),
  postgres: boil('postgres', 6),
  firebase: boil('firebase', 6),
  ansible: boil('ansible', 6),
  vuetify: boil('vuetify', 6),
  webpack: boil('webpack', 6),
  fabric: boil('fabric', 6),
  celery: boil('celery', 6),
  docker: boil('docker', 6),
  python: boil('python', 6),
  django: boil('django', 6),
  ubuntu: boil('ubuntu', 6),
  dashjs: boil('dashjs', 6),
  vimeo: boil('vimeo', 6),
  spark: boil('spark', 6),
  redis: boil('redis', 6),
  nginx: boil('nginx', 6),
  vuejs: boil('vuejs', 6),
  gpac: boil('gpac', 6),
  web: boil('web', 6),
  drf: boil('drf', 6),
  vim: boil('vim', 6),
  kitty: boil('kitty', 6),
  awesome: boil('awesome', 6),
  imagemagick: boil('imagemagick', 6),
  raspberrypi: boil('raspberrypi', 6),
  ffmpeg: boil('ffmpeg', 6),
  irc: boil('irc', 6),
  selenium: boil('selenium', 6),
  latex: boil('latex', 6),
  d3js: boil('d3js', 6),
  git: boil('git', 6),
  scrapy: boil('scrapy', 6),
  telegram: boil('telegram', 6),
  tensorflow: boil('tensorflow', 6),
  elasticsearch: boil('elasticsearch', 6),
};
var cv = {
  ..._.me,
  children: [
    {
      ..._.cv,
      children: [
        {
          ..._.edu,
          children: [
            {..._.sampad, children: [_.helliChair, _.itym, _.ysc1, _.ysc2]},
            {
              ..._.sharif,
              children: [
                _.spark,
                _.raspberrypi,
                _.scrapy,
                _.tensorflow,
                _.elasticsearch,
                {
                  ..._.aic,
                  children: [_.redis, _.docker, _.kubernetes, _.fabric, _.ansible],
                },
              ],
            },
          ],
        },
        {
          ..._.work,
          children: [
            _.selenium,
            _.d3js,
            _.latex,
            _.git,
            _.telegram,
            {
              ..._.glassacademy,
              children: [
                {
                  ..._.glass_backend,
                  children: [_.python, _.django, _.postgres, _.ubuntu],
                },
                {
                  ..._.glass_front,
                  children: [_.web, _.electronjs, _.expressjs, _.gpac, _.dashjs],
                },
              ],
            },
            {
              ..._.eleos,
              children: [
                {
                  ..._.eleos_backend,
                  children: [_.celery, _.drf, _.firebase, _.vimeo, _.nginx],
                },
                {
                  ..._.eleos_front,
                  children: [
                    _.vuejs,
                    _.highcharts,
                    _.nativescript,
                    _.vuetify,
                    _.webpack,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      ..._.social,
      children: [_.gmail, _.twitter, _.instagram, _.github, _.stackoverflow],
    },
    {
      ..._.arch,
      children: [_.irc, _.vim, _.kitty, _.awesome, _.imagemagick, _.ffmpeg],
    },
  ],
};

var graph;
var hideTimer;
var tip = d3
  .tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return d.desc;
  });
function myGraph() {
  // Add and remove elements on the graph object
  this.addNode = function(vertex) {
    nodes.push(vertex);
    update();
  };

  this.removeNode = function(id) {
    var i = 0;
    var n = findNode(id);
    while (i < links.length) {
      if (links[i]['source'] == n || links[i]['target'] == n) {
        links.splice(i, 1);
      } else i++;
    }
    nodes.splice(findNodeIndex(id), 1);
    update();
  };

  this.removeLink = function(source, target) {
    for (var i = 0; i < links.length; i++) {
      if (links[i].source.id == source && links[i].target.id == target) {
        links.splice(i, 1);
        break;
      }
    }
    update();
  };

  this.removeallLinks = function() {
    links.splice(0, links.length);
    update();
  };

  this.removeAllNodes = function() {
    nodes.splice(0, links.length);
    update();
  };

  this.addLink = function(source, target, value) {
    links.push({
      source: findNode(source),
      target: findNode(target),
      value: value,
    });
    update();
  };

  var findNode = function(id) {
    for (var i in nodes) {
      if (nodes[i]['id'] === id) return nodes[i];
    }
  };

  var findNodeIndex = function(id) {
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].id == id) {
        return i;
      }
    }
  };

  // set up the D3 visualisation in the specified element

  var color = d3.scale.category10();

  var mainSVG = d3
    .select('body')
    .append('svg:svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('id', 'svg')
    .attr('pointer-events', 'all')
    .attr('perserveAspectRatio', 'xMinYMid');

  function addImagePattern(vertex) {
    vertex.children.forEach(addImagePattern);
    if (vertex.picture == undefined) return;
    mainSVG
      .append('defs')
      .append('pattern')
      .attr('id', vertex.id)
      .attr('patternUnits', 'userSpaceOnUse')
      .attr('x', -vertex.radius)
      .attr('y', -vertex.radius)
      .attr('width', vertex.radius * 2)
      .attr('height', vertex.radius * 2)
      .append('image')
      .attr('xlink:href', vertex.picture)
      .attr('width', vertex.radius * 2)
      .attr('height', vertex.radius * 2);
  }
  addImagePattern(cv);

  var vis = mainSVG.append('svg:g');

  var force = d3.layout.force();

  var nodes = force.nodes(),
    links = force.links();

  mainSVG.call(tip);

  var update = function() {
    var link = vis.selectAll('line').data(links, function(d) {
      return d.source.id + '-' + d.target.id;
    });

    link
      .enter()
      .append('line')
      .attr('id', function(d) {
        return d.source.id + '-' + d.target.id;
      })
      .attr('stroke-width', function(d) {
        return d.value / 10;
      })
      .attr('class', 'link');
    link.append('title').text(function(d) {
      return d.value;
    });
    link.exit().remove();

    var node = vis.selectAll('g.node').data(nodes, function(d) {
      return d.id;
    });

    var nodeEnter = node
      .enter()
      .append('g')
      .attr('class', 'node')
      .call(force.drag);

    nodeEnter
      .append('svg:circle')
      .attr('r', function(x) {
        return x.radius;
      })
      .attr('id', function(x) {
        return 'Node;' + x.id;
      })
      .attr('class', 'nodeStrokeClass')
      .attr('stroke', 'gray')
      .attr('stroke-width', '2')
      .attr('fill', function(x) {
        return x.fill;
      })
      .on('mouseover', function(vertex) {
        if (vertex.desc != undefined) tip.show(vertex);
      })
      .on('mouseout', function(vertex) {
        clearTimeout(hideTimer);
        hideTimer = setTimeout(function() {
          tip.hide(vertex);
        }, 2300);
      });
    //.attr("fill", function(d) { return color(d.id); });

    node.exit().remove();

    force.on('tick', function() {
      node.attr('transform', function(d) {
        return 'translate(' + d.x + ',' + d.y + ')';
      });

      link
        .attr('x1', function(d) {
          return d.source.x;
        })
        .attr('y1', function(d) {
          return d.source.y;
        })
        .attr('x2', function(d) {
          return d.target.x;
        })
        .attr('y2', function(d) {
          return d.target.y;
        });
    });

    // Restart the force layout.
    //console.log([document.getElementById("svg").getBBox().width, document.getElementById("svg").getBBox().height])
    svgDiv = document.getElementsByTagName('body')[0];
    force
      .size([svgDiv.clientWidth, svgDiv.clientHeight])
      .charge(-1200)
      .linkDistance(function(d) {
        return d.value * 3;
      })
      .start();
  };

  // Make it all go
  update();
}

function drawGraph() {
  graph = new myGraph('#svgdiv');

  function addNodeWithFather(vertex, father) {
    graph.addNode(vertex);
    if (father != undefined) {
      graph.addLink(father.id, vertex.id, vertex.parentEdgeValue);
    }
    keepNodesOnTop();
  }

  var globalDelay = 0;
  var DEFAULT_DELAY = 1000;
  function processNode(vertex, father) {
    if (vertex.hasOwnProperty('delay')) globalDelay += vertex.delay;
    else globalDelay += DEFAULT_DELAY;
    setTimeout(function() {
      addNodeWithFather(vertex, father);
    }, globalDelay);
    vertex.children.forEach(function(x) {
      processNode(x, vertex);
    });
  }

  processNode(cv);
}

drawGraph();

// because of the way the network is created, nodes are created first, and links second,
// so the lines were on top of the nodes, this just reorders the DOM to put the svg:g on top
function keepNodesOnTop() {
  $('.nodeStrokeClass').each(function(index) {
    var gnode = this.parentNode;
    gnode.parentNode.appendChild(gnode);
  });
}
function addNodes() {
  d3.select('svg').remove();
  drawGraph();
}
