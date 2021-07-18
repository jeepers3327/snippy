export interface Language {
  name: string;
  language: string;
  extensions: string[];
}

export const languages: Language[] = [
  {
    name: '1C',
    extensions: ['.1c'],
    language: '1c',
  },
  {
    name: 'ABNF',
    extensions: ['.abnf'],
    language: 'abnf',
  },
  {
    name: 'Access logs',
    extensions: ['.accesslog'],
    language: 'accesslog',
  },
  {
    name: 'Ada',
    extensions: ['.ada'],
    language: 'ada',
  },
  {
    name: 'Arduino (C++ w/Arduino libs)',
    extensions: ['.arduino', '.ino'],
    language: 'arduino',
  },
  {
    name: 'ARM assembler',
    extensions: ['.armasm', '.arm'],
    language: 'armasm',
  },
  {
    name: 'AVR assembler',
    extensions: ['.avrasm'],
    language: 'avrasm',
  },
  {
    name: 'ActionScript',
    extensions: ['.actionscript', '.as'],
    language: 'actionscript',
  },
  {
    name: 'AngelScript',
    extensions: ['.angelscript', '.asc'],
    language: 'angelscript',
  },
  {
    name: 'Apache',
    extensions: ['.apache', '.apacheconf'],
    language: 'apache',
  },
  {
    name: 'AppleScript',
    extensions: ['.applescript', '.osascript'],
    language: 'applescript',
  },
  {
    name: 'Arcade',
    extensions: ['.arcade'],
    language: 'arcade',
  },
  {
    name: 'AsciiDoc',
    extensions: ['.asciidoc', '.adoc'],
    language: 'asciidoc',
  },
  {
    name: 'AspectJ',
    extensions: ['.aspectj'],
    language: 'aspectj',
  },
  {
    name: 'AutoHotkey',
    extensions: ['.autohotkey'],
    language: 'autohotkey',
  },
  {
    name: 'AutoIt',
    extensions: ['.autoit'],
    language: 'autoit',
  },
  {
    name: 'Awk',
    extensions: ['.awk', '.mawk', '.nawk', '.gawk'],
    language: 'awk',
  },
  {
    name: 'Bash',
    extensions: ['.bash', '.sh', '.zsh'],
    language: 'bash',
  },
  {
    name: 'Basic',
    extensions: ['.basic'],
    language: 'basic',
  },
  {
    name: 'BNF',
    extensions: ['.bnf'],
    language: 'bnf',
  },
  {
    name: 'Brainfuck',
    extensions: ['.brainfuck', '.bf'],
    language: 'brainfuck',
  },
  {
    name: 'C#',
    extensions: ['.csharp', '.cs'],
    language: 'csharp',
  },
  {
    name: 'C',
    extensions: ['.c', '.h'],
    language: 'c',
  },
  {
    name: 'C++',
    extensions: ['.cpp', '.hpp', '.cc', '.hh', '.c++', '.h++', '.cxx', '.hxx'],
    language: 'cpp',
  },
  {
    name: 'C/AL',
    extensions: ['.cal'],
    language: 'cal',
  },
  {
    name: 'Cache Object Script',
    extensions: ['.cos', '.cls'],
    language: 'cos',
  },
  {
    name: 'CMake',
    extensions: ['.cmake', '.cmake.in'],
    language: 'cmake',
  },
  {
    name: 'Coq',
    extensions: ['.coq'],
    language: 'coq',
  },
  {
    name: 'CSP',
    extensions: ['.csp'],
    language: 'csp',
  },
  {
    name: 'CSS',
    extensions: ['.css'],
    language: 'css',
  },
  {
    name: 'Cap’n Proto',
    extensions: ['.capnproto', '.capnp'],
    language: 'capnproto',
  },
  {
    name: 'Clojure',
    extensions: ['.clojure', '.clj'],
    language: 'clojure',
  },
  {
    name: 'CoffeeScript',
    extensions: ['.coffeescript', '.coffee', '.cson', '.iced'],
    language: 'coffeescript',
  },
  {
    name: 'Crmsh',
    extensions: ['.crmsh', '.crm', '.pcmk'],
    language: 'crmsh',
  },
  {
    name: 'Crystal',
    extensions: ['.crystal', '.cr'],
    language: 'crystal',
  },
  {
    name: 'D',
    extensions: ['.d'],
    language: 'd',
  },
  {
    name: 'DNS Zone file',
    extensions: ['.dns', '.zone', '.bind'],
    language: 'dns',
  },
  {
    name: 'DOS',
    extensions: ['.dos', '.bat', '.cmd'],
    language: 'dos',
  },
  {
    name: 'Dart',
    extensions: ['.dart'],
    language: 'dart',
  },
  {
    name: 'Delphi',
    extensions: ['.dpr', '.dfm', '.pas', '.pascal'],
    language: 'dpr',
  },
  {
    name: 'Diff',
    extensions: ['.diff', '.patch'],
    language: 'diff',
  },
  {
    name: 'Django',
    extensions: ['.django', '.jinja'],
    language: 'django',
  },
  {
    name: 'Dockerfile',
    extensions: ['.dockerfile', '.docker'],
    language: 'dockerfile',
  },
  {
    name: 'dsconfig',
    extensions: ['.dsconfig'],
    language: 'dsconfig',
  },
  {
    name: 'DTS (Device Tree)',
    extensions: ['.dts'],
    language: 'dts',
  },
  {
    name: 'Dust',
    extensions: ['.dust', '.dst'],
    language: 'dust',
  },
  {
    name: 'EBNF',
    extensions: ['.ebnf'],
    language: 'ebnf',
  },
  {
    name: 'Elixir',
    extensions: ['.ex', '.exs'],
    language: 'elixir',
  },
  {
    name: 'Elm',
    extensions: ['.elm'],
    language: 'elm',
  },
  {
    name: 'Erlang',
    extensions: ['.erlang', '.erl'],
    language: 'erlang',
  },
  {
    name: 'Excel',
    extensions: ['.excel', '.xls', '.xlsx'],
    language: 'excel',
  },
  {
    name: 'F#',
    extensions: ['.fsharp', '.fs'],
    language: 'fsharp',
  },
  {
    name: 'FIX',
    extensions: ['.fix'],
    language: 'fix',
  },
  {
    name: 'Fortran',
    extensions: ['.fortran', '.f90', '.f95'],
    language: 'fortran',
  },
  {
    name: 'G-Code',
    extensions: ['.gcode', '.nc'],
    language: 'gcode',
  },
  {
    name: 'Gams',
    extensions: ['.gams', '.gms'],
    language: 'gams',
  },
  {
    name: 'GAUSS',
    extensions: ['.gauss', '.gss'],
    language: 'gauss',
  },
  {
    name: 'Gherkin',
    extensions: ['.gherkin'],
    language: 'gherkin',
  },
  {
    name: 'Go',
    extensions: ['.go', '.golang'],
    language: 'go',
  },
  {
    name: 'Golo',
    extensions: ['.golo', '.gololang'],
    language: 'golo',
  },
  {
    name: 'Gradle',
    extensions: ['.gradle'],
    language: 'gradle',
  },
  {
    name: 'Groovy',
    extensions: ['.groovy'],
    language: 'groovy',
  },
  {
    name: 'HTML, XML',
    extensions: ['.html', '.xhtml'],
    language: 'html',
  },
  {
    name: 'HTTP',
    extensions: ['.http', '.https'],
    language: 'http',
  },
  {
    name: 'Haml',
    extensions: ['.haml'],
    language: 'haml',
  },
  {
    name: 'Handlebars',
    extensions: ['.handlebars', '.hbs', '.html.hbs', '.html.handlebars'],
    language: 'handlebars',
  },
  {
    name: 'Haskell',
    extensions: ['.haskell', '.hs'],
    language: 'haskell',
  },
  {
    name: 'Haxe',
    extensions: ['.haxe', '.hx'],
    language: 'haxe',
  },
  {
    name: 'Hy',
    extensions: ['.hy', '.hylang'],
    language: 'hy',
  },
  {
    name: 'Ini, TOML',
    extensions: ['.ini', '.toml'],
    language: 'ini',
  },
  {
    name: 'Inform7',
    extensions: ['.inform7', '.i7'],
    language: 'inform7',
  },
  {
    name: 'IRPF90',
    extensions: ['.irpf90'],
    language: 'irpf90',
  },
  {
    name: 'JSON',
    extensions: ['.json'],
    language: 'json',
  },
  {
    name: 'Java',
    extensions: ['.java', '.jsp'],
    language: 'java',
  },
  {
    name: 'JavaScript',
    extensions: ['.javascript', '.js', '.jsx'],
    language: 'javascript',
  },
  {
    name: 'Julia',
    extensions: ['.julia', '.julia-repl'],
    language: 'julia',
  },
  {
    name: 'Kotlin',
    extensions: ['.kotlin', '.kt'],
    language: 'kotlin',
  },
  {
    name: 'LaTeX',
    extensions: ['.tex'],
    language: 'tex',
  },
  {
    name: 'Leaf',
    extensions: ['.leaf'],
    language: 'leaf',
  },
  {
    name: 'Lasso',
    extensions: ['.lasso', '.ls', '.lassoscript'],
    language: 'lasso',
  },
  {
    name: 'Less',
    extensions: ['.less'],
    language: 'less',
  },
  {
    name: 'LDIF',
    extensions: ['.ldif'],
    language: 'ldif',
  },
  {
    name: 'Lisp',
    extensions: ['.lisp'],
    language: 'lisp',
  },
  {
    name: 'LiveCode Server',
    extensions: ['.livecodeserver'],
    language: 'livecodeserver',
  },
  {
    name: 'LiveScript',
    extensions: ['.livescript', '.ls'],
    language: 'livescript',
  },
  {
    name: 'Lua',
    extensions: ['.lua'],
    language: 'lua',
  },
  {
    name: 'Makefile',
    extensions: ['.makefile', '.mk', '.mak', '.make'],
    language: 'makefile',
  },
  {
    name: 'Markdown',
    extensions: ['.markdown', '.md', '.mkdown', '.mkd'],
    language: 'markdown',
  },
  {
    name: 'Mathematica',
    extensions: ['.mathematica', '.mma', '.wl'],
    language: 'mathematica',
  },
  {
    name: 'Matlab',
    extensions: ['.matlab'],
    language: 'matlab',
  },
  {
    name: 'Maxima',
    extensions: ['.maxima'],
    language: 'maxima',
  },
  {
    name: 'Maya Embedded Language',
    extensions: ['.mel'],
    language: 'mel',
  },
  {
    name: 'Mercury',
    extensions: ['.mercury'],
    language: 'mercury',
  },
  {
    name: 'Mizar',
    extensions: ['.mizar'],
    language: 'mizar',
  },
  {
    name: 'Mojolicious',
    extensions: ['.mojolicious'],
    language: 'mojolicious',
  },
  {
    name: 'Monkey',
    extensions: ['.monkey'],
    language: 'monkey',
  },
  {
    name: 'Moonscript',
    extensions: ['.moonscript', '.moon'],
    language: 'moonscript',
  },
  {
    name: 'N1QL',
    extensions: ['.n1ql'],
    language: 'n1ql',
  },
  {
    name: 'NSIS',
    extensions: ['.nsis'],
    language: 'nsis',
  },
  {
    name: 'Nginx',
    extensions: ['.nginx', '.nginxconf'],
    language: 'nginx',
  },
  {
    name: 'Nim',
    extensions: ['.nim', '.nimrod'],
    language: 'nim',
  },
  {
    name: 'Nix',
    extensions: ['.nix'],
    language: 'nix',
  },
  {
    name: 'OCaml',
    extensions: ['.ocaml', '.ml'],
    language: 'ocaml',
  },
  {
    name: 'Objective C',
    extensions: [
      '.objectivec',
      '.mm',
      '.objc',
      '.obj-c',
      '.obj-c++',
      '.objective-c++',
    ],
    language: 'objectivec',
  },
  {
    name: 'OpenGL Shading Language',
    extensions: ['.glsl'],
    language: 'glsl',
  },
  {
    name: 'OpenSCAD',
    extensions: ['.openscad', '.scad'],
    language: 'openscad',
  },
  {
    name: 'Oracle Rules Language',
    extensions: ['.ruleslanguage'],
    language: 'ruleslanguage',
  },
  {
    name: 'Oxygene',
    extensions: ['.oxygene'],
    language: 'oxygene',
  },
  {
    name: 'PF',
    extensions: ['.pf', '.pf.conf'],
    language: 'pf',
  },
  {
    name: 'PHP',
    extensions: ['.php'],
    language: 'php',
  },
  {
    name: 'Parser3',
    extensions: ['.parser3'],
    language: 'parser3',
  },
  {
    name: 'Perl',
    extensions: ['.perl', '.pl', '.pm'],
    language: 'perl',
  },
  {
    name: 'Plaintext',
    extensions: ['.plaintext', '.txt', '.text'],
    language: 'plaintext',
  },
  {
    name: 'Pony',
    extensions: ['.pony'],
    language: 'pony',
  },
  {
    name: 'PostgreSQL & PL/pgSQL',
    extensions: ['.pgsql', '.postgres', '.postgresql'],
    language: 'pgsql',
  },
  {
    name: 'PowerShell',
    extensions: ['.powershell', '.ps', '.ps1'],
    language: 'powershell',
  },
  {
    name: 'Processing',
    extensions: ['.processing'],
    language: 'processing',
  },
  {
    name: 'Prolog',
    extensions: ['.prolog'],
    language: 'prolog',
  },
  {
    name: 'Properties',
    extensions: ['.properties'],
    language: 'properties',
  },
  {
    name: 'Protocol Buffers',
    extensions: ['.protobuf'],
    language: 'protobuf',
  },
  {
    name: 'Puppet',
    extensions: ['.puppet', '.pp'],
    language: 'puppet',
  },
  {
    name: 'Python',
    extensions: ['.python', '.py', '.gyp'],
    language: 'python',
  },
  {
    name: 'Python profiler results',
    extensions: ['.profile'],
    language: 'profile',
  },
  {
    name: 'Python REPL',
    extensions: ['.python-repl', '.pycon'],
    language: 'python-repl',
  },
  {
    name: 'Q',
    extensions: ['.k', '.kdb'],
    language: 'k',
  },
  {
    name: 'QML',
    extensions: ['.qml'],
    language: 'qml',
  },
  {
    name: 'R',
    extensions: ['.r'],
    language: 'r',
  },
  {
    name: 'ReasonML',
    extensions: ['.reasonml', '.re'],
    language: 'reasonml',
  },
  {
    name: 'RenderMan RIB',
    extensions: ['.rib'],
    language: 'rib',
  },
  {
    name: 'RenderMan RSL',
    extensions: ['.rsl'],
    language: 'rsl',
  },
  {
    name: 'Roboconf',
    extensions: ['.graph', '.instances'],
    language: 'graph',
  },
  {
    name: 'Ruby',
    extensions: ['.ruby', '.rb', '.gemspec', '.podspec', '.thor', '.irb'],
    language: 'ruby',
  },
  {
    name: 'Rust',
    extensions: ['.rust', '.rs'],
    language: 'rust',
  },
  {
    name: 'SAS',
    extensions: ['.SAS', '.sas'],
    language: 'SAS',
  },
  {
    name: 'SCSS',
    extensions: ['.scss'],
    language: 'scss',
  },
  {
    name: 'SQL',
    extensions: ['.sql'],
    language: 'sql',
  },
  {
    name: 'STEP Part 21',
    extensions: ['.p21', '.step', '.stp'],
    language: 'p21',
  },
  {
    name: 'Scala',
    extensions: ['.scala'],
    language: 'scala',
  },
  {
    name: 'Scheme',
    extensions: ['.scheme'],
    language: 'scheme',
  },
  {
    name: 'Scilab',
    extensions: ['.scilab', '.sci'],
    language: 'scilab',
  },
  {
    name: 'Shell',
    extensions: ['.shell', '.console'],
    language: 'shell',
  },
  {
    name: 'Smali',
    extensions: ['.smali'],
    language: 'smali',
  },
  {
    name: 'Smalltalk',
    extensions: ['.smalltalk', '.st'],
    language: 'smalltalk',
  },
  {
    name: 'SML',
    extensions: ['.sml', '.ml'],
    language: 'sml',
  },
  {
    name: 'Stan',
    extensions: ['.stan', '.stanfuncs'],
    language: 'stan',
  },
  {
    name: 'Stata',
    extensions: ['.stata'],
    language: 'stata',
  },
  {
    name: 'Stylus',
    extensions: ['.stylus', '.styl'],
    language: 'stylus',
  },
  {
    name: 'SubUnit',
    extensions: ['.subunit'],
    language: 'subunit',
  },
  {
    name: 'Swift',
    extensions: ['.swift'],
    language: 'swift',
  },
  {
    name: 'Tcl',
    extensions: ['.tcl', '.tk'],
    language: 'tcl',
  },
  {
    name: 'Test Anything Protocol',
    extensions: ['.tap'],
    language: 'tap',
  },
  {
    name: 'Thrift',
    extensions: ['.thrift'],
    language: 'thrift',
  },
  {
    name: 'TP',
    extensions: ['.tp'],
    language: 'tp',
  },
  {
    name: 'Twig',
    extensions: ['.twig', '.craftcms'],
    language: 'twig',
  },
  {
    name: 'TypeScript',
    extensions: ['.typescript', '.ts'],
    language: 'typescript',
  },
  {
    name: 'VB.Net',
    extensions: ['.vbnet', '.vb'],
    language: 'vbnet',
  },
  {
    name: 'VBScript',
    extensions: ['.vbscript', '.vbs'],
    language: 'vbscript',
  },
  {
    name: 'VHDL',
    extensions: ['.vhdl'],
    language: 'vhdl',
  },
  {
    name: 'Vala',
    extensions: ['.vala'],
    language: 'vala',
  },
  {
    name: 'Verilog',
    extensions: ['.verilog', '.v'],
    language: 'verilog',
  },
  {
    name: 'Vim Script',
    extensions: ['.vim'],
    language: 'vim',
  },
  {
    name: 'X++',
    extensions: ['.axapta', '.x++'],
    language: 'axapta',
  },
  {
    name: 'x86 Assembly',
    extensions: ['.x86asm'],
    language: 'x86asm',
  },
  {
    name: 'XL',
    extensions: ['.xl', '.tao'],
    language: 'xl',
  },
  {
    name: 'XQuery',
    extensions: ['.xquery', '.xpath', '.xq'],
    language: 'xquery',
  },
  {
    name: 'YAML',
    extensions: ['.yml', '.yaml'],
    language: 'yml',
  },
  {
    name: 'Zephir',
    extensions: ['.zephir', '.zep'],
    language: 'zephir',
  },
];

const getDefaultLanguage = () => {
  const result = languages.find((lang) => lang.name === 'Plaintext')!;
  return result.language;
};

export const defaultLanguage = getDefaultLanguage();
