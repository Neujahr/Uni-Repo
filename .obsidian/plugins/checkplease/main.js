/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => CheckPlease
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var import_state = require("@codemirror/state");
var import_language = require("@codemirror/language");
var import_view = require("@codemirror/view");
var Checkbox = class extends import_obsidian.MarkdownRenderChild {
  constructor(containerEl, state, onclick) {
    super(containerEl);
    this.state = state;
    this.onclick = onclick;
  }
  onload() {
    const span_container = createEl("span");
    const input = createEl("input");
    input.type = "checkbox";
    input.checked = this.state.checked;
    input.classList.add(CLASS_NAME);
    input.dataset.cp_id = this.state.id.toString();
    input.onclick = () => this.onclick({ checked: input.checked, id: this.state.id });
    const span_inner = createEl("span");
    span_inner.textContent = Regexer.removeCheckboxFromHtmlContent(this.containerEl.textContent || "");
    span_container.appendChild(input);
    span_container.appendChild(span_inner);
    this.containerEl.textContent = "";
    this.containerEl.appendChild(span_container);
  }
};
var CLASS_NAME = "cp-checkbox";
var _Regexer = class {
  static parseAnnoatedCheckbox(content) {
    const result = content.match(
      new RegExp("^" + _Regexer.regex_checkbox_annotated.source)
    );
    if (!result) {
      return null;
    }
    return {
      id: parseInt(result.groups.id),
      checked: result.groups.check === "x"
    };
  }
  static removeCheckboxFromHtmlContent(content) {
    return content.replace(
      new RegExp("^" + _Regexer.regex_checkbox_annotated.source),
      ""
    );
  }
  static updateCheckboxInMarkdownContent(document2, state_new) {
    const regex = new RegExp(
      _Regexer.regex_markdown_cell_start.source + _Regexer.regex_checkbox.source + `\\{${state_new.id}\\}` + _Regexer.regex_post_checkbox.source
    );
    return document2.replace(regex, (match) => {
      return match.replace(
        _Regexer.regex_checkbox,
        state_new.checked ? _Regexer.checkbox_checked : _Regexer.checkbox_unchecked
      );
    });
  }
};
var Regexer = _Regexer;
Regexer.checkbox_checked = "- [x]";
Regexer.checkbox_unchecked = "- [ ]";
Regexer.regex_checkbox = /- \[(?<check>[ x])\]/g;
Regexer.regex_annotation = /\{(?<id>[0-9]+)\}/g;
Regexer.regex_checkbox_annotated = new RegExp(
  // there should be no unannotated cells in html 
  _Regexer.regex_checkbox.source + _Regexer.regex_annotation.source + "($| .*)"
);
Regexer.regex_markdown_cell_start = /\| */;
Regexer.regex_post_checkbox = /( +|\||$)/;
Regexer.regex_markdown_cell = new RegExp(
  _Regexer.regex_markdown_cell_start.source + _Regexer.regex_checkbox.source + "(" + _Regexer.regex_annotation.source + ")?" + _Regexer.regex_post_checkbox.source
);
var CheckboxWidget = class extends import_view.WidgetType {
  constructor(state, onclick) {
    super();
    this.state = state;
    this.onclick = onclick;
  }
  toDOM() {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = this.state.checked;
    input.classList.add(CLASS_NAME);
    input.onclick = () => this.onclick({ checked: input.checked, id: this.state.id });
    return input;
  }
};
var CheckPleaseViewPlugin = class {
  constructor(view) {
    this.checkboxes = [];
    this.decorations = this.buildDecorations(view);
    this.view = view;
  }
  update(update) {
    if (update.docChanged || update.viewportChanged || update.selectionSet) {
      this.decorations = this.buildDecorations(update.view);
    }
  }
  static annotateCheckboxes(editor, view) {
    let id = 0;
    const changes = [];
    (0, import_language.syntaxTree)(view.state).iterate({
      from: 0,
      enter(node) {
        if (!node.type.name.startsWith("hmd-table-sep_hmd-table-sep-")) {
          return;
        }
        const candidate = view.state.doc.slice(node.from).iterLines().next().value;
        const result = candidate.match(new RegExp(`^${Regexer.regex_markdown_cell.source}`));
        if (!result) {
          return;
        }
        if (result.groups.id === id.toString()) {
          id++;
          return;
        }
        const annotation_start_idx = node.from + candidate.indexOf("-") + Regexer.checkbox_checked.length;
        const annotation_text = `{${id++}}`;
        changes.push({
          from: editor.offsetToPos(
            annotation_start_idx
          ),
          to: editor.offsetToPos(
            // +1 to include the closing "}" since the "to" value is exclusive
            result.groups.id ? node.from + candidate.indexOf("}") + 1 : annotation_start_idx
          ),
          text: annotation_text
        });
      }
    });
    editor.transaction({
      changes
    });
  }
  buildDecorations(view) {
    const builder = new import_state.RangeSetBuilder();
    for (let { from, to } of view.visibleRanges) {
      (0, import_language.syntaxTree)(view.state).iterate({
        from,
        to,
        enter(node) {
          if (node.type.name.startsWith("hmd-table-sep_hmd-table-sep-")) {
            let candidate = view.state.doc.slice(node.from).iterLines().next().value;
            const result = candidate.match(new RegExp(`^${Regexer.regex_markdown_cell.source}`));
            if (!result || result.groups.id === void 0) {
              return;
            }
            const start_idx = node.from + candidate.indexOf("-");
            const end_idx = node.from + candidate.indexOf("}") + 1;
            if (!(start_idx > view.state.selection.main.to || end_idx < view.state.selection.main.from)) {
              return;
            }
            builder.add(
              start_idx,
              end_idx,
              import_view.Decoration.replace({
                widget: new CheckboxWidget(
                  { id: parseInt(result.groups.id), checked: result.groups.check === "x" },
                  (state) => {
                    view.dispatch(
                      view.state.update({
                        changes: {
                          from: start_idx + 3,
                          to: start_idx + 4,
                          insert: state.checked ? "x" : " "
                        }
                      })
                    );
                  }
                )
              })
            );
          }
        }
      });
    }
    return builder.finish();
  }
};
var CheckPlease = class extends import_obsidian.Plugin {
  onload() {
    this.registerEditorExtension([
      import_view.ViewPlugin.fromClass(
        CheckPleaseViewPlugin,
        {
          decorations: (value) => value.decorations
        }
      )
    ]);
    this.registerEvent(
      this.app.workspace.on(
        "file-open",
        (file) => {
          var _a;
          if (!file || file.extension !== "md") {
            return;
          }
          const editor = (_a = this.app.workspace.activeEditor) == null ? void 0 : _a.editor;
          if (!editor) {
            return;
          }
          const cm = editor.cm;
          CheckPleaseViewPlugin.annotateCheckboxes(
            editor,
            cm
          );
          this.app.vault.process(
            file,
            (_) => cm.state.doc.toString()
          );
        }
      )
    );
    this.registerEvent(
      this.app.workspace.on(
        "editor-change",
        (_, info) => {
          CheckPleaseViewPlugin.annotateCheckboxes(
            info.editor,
            // @ts-expect-error, not typed
            info.editor.cm
          );
        }
      )
    );
    this.registerMarkdownPostProcessor(
      this.postProcessMarkdown.bind(this)
    );
  }
  postProcessMarkdown(element, context) {
    element.querySelectorAll("td").forEach(
      (td) => {
        const checkbox = Regexer.parseAnnoatedCheckbox(td.innerText);
        if (!checkbox) {
          return;
        }
        context.addChild(
          new Checkbox(
            td,
            { id: checkbox.id, checked: checkbox.checked },
            (state_new) => {
              this.app.vault.process(
                this.app.workspace.getActiveFile(),
                (document2) => Regexer.updateCheckboxInMarkdownContent(document2, state_new)
              );
            }
          )
        );
      }
    );
  }
};
