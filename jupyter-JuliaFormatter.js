define(['./kernel_exec_on_cell'], function (kernel_exec_on_cell) {
    'use strict';

    var mod_name = 'jupyter-JuliaFormatter';

    // gives default settings
    var cfg = {
        add_toolbar_button: true,
        hotkeys: {
            process_selected: 'Ctrl-B',
            process_all: 'Ctrl-Shift-B',
        },
        register_hotkey: true,
        show_alerts_for_errors: true,
        button_label: 'JuliaFormatter',
        button_icon: 'fa-cubes',
        kbd_shortcut_text: 'JuliaFormatter',
    };

    cfg.kernel_config_map = { // map of parameters for supported kernels
        "julia": {
            "library": [
                "using JuliaFormatter",
                "using JSON",
            ].join("\n"),
            "prefix": "print(json(format_text(",
            "postfix": ")))"
        },
        "javascript": {
            "library": "jsbeautify = require(" + "'js-beautify')",
            // we do this + trick to prevent require.js attempting to load js-beautify when processing the AMI-style load for this module
            "prefix": "console.log(JSON.stringify(jsbeautify.js_beautify(",
            "postfix": ")));"
        }
    };


    var prettifier = new kernel_exec_on_cell.define_plugin(mod_name, cfg);
    prettifier.load_ipython_extension = prettifier.initialize_plugin;
    return prettifier;
});
