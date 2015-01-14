/* jslint asi:true, browser:true */

if (typeof Lexis == "undefined") var Lexis = {};

var Dictionary = {
    description: null,
    element: null,
    filter: function() {
        var i = 0;
        var current_element = null;
        for (i = 0; i < Dictionary.element.childElementCount; i++) {
            current_element = Dictionary.element.children.item(i);
            if (current_element.tagName !== "SECTION") continue;
            if (window.location.hash && (window.location.hash === "#:" || (window.location.hash.indexOf(":") === -1 && Dictionary.lemmaContainsForm(Dictionary.getLemmaFromId(current_element.id), window.location.hash.substr(1))) || current_element.id === window.location.hash.substr(1))) current_element.removeAttribute("hidden");
            else current_element.setAttribute("hidden", "");
        }
    },
    getHTML: function(e) {
        var i = 0;
        var s = "";
        var current_node = null;
        if (e.hasAttribute("usage")) s += "<small>(" + e.getAttribute("usage") + ")</small>";
        for (i = 0; i < e.childNodes.length; i++) {
            current_node = e.childNodes.item(i);
            if (current_node.nodeType === 3) {
                s += current_node.textContent;
            }
            else if (current_node.nodeType === 1) {
                switch (current_node.tagName) {
                    case "wordref":
                        s += "<i><a href='#" + Dictionary.getLemmaName(current_node.textContent) + "'>" + current_node.textContent + "</a></i>";
                        break;
                    case "etymon":
                    case "mention":
                        if (current_node.getAttributeNS("http://www.w3.org/XML/1998/namespace", "lang") != e.getAttributeNS("http://www.w3.org/XML/1998/namespace", "lang")) s += "<i lang='" + current_node.getAttributeNS("http://www.w3.org/XML/1998/namespace", "lang") + "'>" + current_node.textContent + "</i>";
                        else s += "<i>" + current_node.textContent + "</i>";
                        break;
                }
            }
        }
        return s;
    },
    getHumanReadableWordClass: function(word_class) {
        word_class = Dictionary.string(word_class);
        var class_list = word_class.split(" ");
        var class_item_list = null;
        var i = 0;
        var j = 0;
        var s = "";
        var q = null;
        for (i = 0; i < class_list.length; i++) {
            if (i) s += ", ";
            class_item_list = class_list[i].split(".");
            q = {};
            for (j = 0; j < class_item_list.length; j++) {
                q[class_item_list[j]] = true;
            }

            if (q.pfv) s += "perfective ";
            if (q.prog) s += "progressive ";
            if (q.cont) s += "continuous ";
            if (q.nom) s += "nominative ";
            if (q.obj) s += "objective ";
            if (q.gen) s += "genitive ";
            if (q.refl) s += "reflexive ";
            if (q.poss) s += "possessive ";
            if (q["1"]) s += "first-person ";
            if (q["2"]) s += "second-person ";
            if (q["3"]) s += "third-person ";
            if (q.masc) s += "masculine ";
            if (q.fem) s += "feminine ";
            if (q.neut) s += "neuter ";
            if (q.sing) s += "singular ";
            if (q.pl) s += "plural ";
            if (q.inf) s += "infinitive ";
            if (q.mod) {
                if (q.mir) s += "mirative ";
                else if (q.opt) s += "optative ";
                else if (q.hort) s += "hortative ";
                else if (q.perm) s += "permissive ";
                else if (q.jus) s += "jussive ";
                else if (q.int) s += "interrogative ";
                else s += "modal ";
            }
            if (q.def) s += "definite ";
            if (q.ndef) s += "indefinite ";
            if (q.mass) s += "mass ";
            if (q.pers) s += "personal ";
            if (q.qnt) s += "quantifier ";
            if (q.num) s += "numeral ";
            if (q.dem) s += "demonstrative ";
            if (q.art) s += "article ";
            if (q.det && !q.qnt && !q.num && !q.dem && !q.art) s += "determiner ";
            if (q.post) s += "post-position ";
            if (q.ptcl) s += "particle ";
            if (q.adj) s += "adjective ";
            if (q.adv) s += "adverb ";
            if (q.pron) s += "pronoun ";
            if (q.n) s += "noun ";
            if (q.v) s += "verb ";
            s = s.trim();
        }
        return s;
    },
    getLemmaFromId: function(id) {
        return Dictionary.lemmas[id.split(":")[0]][Number(id.split(":")[1])]
    },
    getLemmaName: function(lemma) {
        return Dictionary.string(lemma).replace(/[:'"#\?]/g, "-");
    },
    ids: [],
    init: function() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.addEventListener("load", function() {Dictionary.load(document.documentElement.dataset.src + "?" + new Date().getTime())}, false);
        document.head.appendChild(script);
        script.src = "http://benjam.faint.xyz/langdev/!DATA!/master/!DATA!/LexisML/scripts/normalize.js";
    },
    lang: "",
    lemmaContainsForm: function(lemma, form) {
        var i;
        for (i = 0; i < lemma.forms.length; i++) {
            if (Dictionary.getLemmaName(lemma.forms.item(i).textContent) == form) return true;
        }
        return false;
    },
    lemmas: {},
    lexis: undefined,
    load: function(src) {
        Dictionary.Requester.addEventListener("load", Dictionary.setup, false);
        Dictionary.Requester.open("get", src, true);
        Dictionary.Requester.overrideMimeType("text/xml");
        Dictionary.Requester.send();
    },
    Requester: new XMLHttpRequest(),
    setup: function() {
        Dictionary.lang = document.documentElement.lang;
        Dictionary.lexis = Dictionary.Requester.responseXML;
        Lexis.normalize(Dictionary.lexis);
        var i = 0;
        var j = 0;
        var elements = Dictionary.lexis.documentElement.childNodes;
        var current_element;
        var current_lemma;
        var lemma_name;
        var lemma_id;
        var class_value;
        var article_html;
        var section_html;
        for (i = 0; i < elements.length; i++) {
            if (elements.item(i).nodeType !== 1) continue;
            current_element = elements.item(i);
            switch (current_element.tagName) {
                case "meta":
                    switch (current_element.getAttribute("name")) {
                        case "title":
                            Dictionary.title = [current_element.getAttributeNS("http://www.w3.org/XML/1998/namespace", "lang"), current_element.textContent];
                            break;
                        case "description":
                            Dictionary.description = [current_element.getAttributeNS("http://www.w3.org/XML/1998/namespace", "lang"), Dictionary.getHTML(current_element)];
                            break;
                        case "splash":
                            Dictionary.splashes[Dictionary.splashes.length] = [current_element.getAttributeNS("http://www.w3.org/XML/1998/namespace", "lang"), Dictionary.getHTML(current_element)];
                            break;
                    }
                    break;
                case "affix":
                case "word":
                    lemma_name = Dictionary.getLemmaName(current_element.getAttribute("lemma"));
                    if (Dictionary.lemmas[lemma_name] === undefined) Dictionary.lemmas[lemma_name] = [];
                    lemma_id = lemma_name + ":" + Dictionary.lemmas[lemma_name].length;
                    current_lemma = Dictionary.lemmas[lemma_name][Dictionary.lemmas[lemma_name].length] = {
                        type: current_element.tagName,
                        name: current_element.getAttribute("lemma"),
                        id: lemma_id,
                        word_class: null,
                        lang: current_element.getAttributeNS("http://www.w3.org/XML/1998/namespace", "lang"),
                        form: null,
                        forms: current_element.getElementsByTagNameNS("http://leaf.faint.xyz/lexisml", "form"),
                        etymology: current_element.getElementsByTagNameNS("http://leaf.faint.xyz/lexisml", "etymology").item(0),
                        meanings: current_element.getElementsByTagNameNS("http://leaf.faint.xyz/lexisml", "meaning")
                    }
                    class_value = "";
                    for (j = 0; j < current_lemma.forms.length; j++) {
                        if (current_lemma.forms.item(j).hasAttribute("class")) class_value += current_lemma.forms.item(j).getAttribute("class") + " ";
                        if (current_lemma.forms.item(j).textContent == current_lemma.name) current_lemma.form = current_lemma.forms.item(j);
                    }
                    if (class_value.trim() !== "") current_lemma.word_class = class_value.trim();
                    Dictionary.ids[Dictionary.ids.length] = lemma_id;
                    break;
            }
        }
        Dictionary.ids.sort(function (a, b) {return String(a).substr(String(a).search(/\w/)).localeCompare(String(b).substr(String(b).search(/\w/)));});
        Dictionary.element = document.createElement("article");
        document.title = Dictionary.title[1];
        document.getElementsByTagName("title").item(0).lang = Dictionary.title[0];
        article_html = "<header id='main-header'><div>";
        article_html += "<h1 lang='" + Dictionary.title[0] + "'>" + Dictionary.title[1] + "</h1>";
        if (Dictionary.splashes.length) {
            i = Math.floor(Math.random()*Dictionary.splashes.length);
            article_html += "<p id='splash' lang='" + Dictionary.splashes[i][0] + "'>" + Dictionary.splashes[i][1] + "</p>";
        }
        if (Dictionary.description !== null) article_html += "</div><p lang='" + Dictionary.description[0] + "'>" + Dictionary.description[1] + "</p>";
        article_html += "<p><label for='filter-input'>search:</label> <input id='filter-input' type='text' autocomplete='off' autofocus inputmode='latin' placeholder='enter search term…' spellcheck='false'> <button id='filter-button'>ok</button> <button id='unfilter-button'>show everything</button></p>";
        article_html += "</header>";
        Dictionary.element.innerHTML = article_html;
        for (i = 0; i < Dictionary.ids.length; i++) {
            current_element = document.createElement("section");
            current_lemma = Dictionary.getLemmaFromId(Dictionary.ids[i]);
            current_element.lang = current_lemma.lang;
            current_element.id = Dictionary.ids[i];
            current_element.setAttribute("hidden", "");
            section_html = "<header>";
            section_html += "<h2>";
            section_html += "<dfn><a href='#" + Dictionary.ids[i] + "'>" + current_lemma.name + "</a></dfn>"
            class_value = "";
            for (j = 0; j < current_lemma.forms.length; j++) {
                if (current_lemma.forms.item(j) == current_lemma.form) {
                    if (current_lemma.forms.item(j).hasAttribute("pronunciation")) section_html += " <small>" + current_lemma.forms.item(j).getAttribute("pronunciation") + "</small>";
                }
                else {
                    if (class_value === "") class_value += " (";
                    else class_value += ", ";
                    class_value += (Dictionary.getHumanReadableWordClass(current_lemma.forms.item(j).getAttribute("class")) + " <dfn>" + current_lemma.forms.item(j).textContent + "</dfn>").trim();
                    if (current_lemma.forms.item(j).hasAttribute("pronunciation")) class_value += " <small>" + Dictionary.string(current_lemma.forms.item(j).getAttribute("pronunciation")) + "</small>";
                }
            }
            if (class_value !== "") class_value += ")";
            section_html += "</h2>";
            if (current_lemma.type == "word") {
                section_html += "<p>" + Dictionary.getHumanReadableWordClass(current_lemma.form.getAttribute("class")) + class_value + "</p>";
            }
            else if (current_lemma.type == "affix") {
                section_html += "<p>" + (Dictionary.getHumanReadableWordClass(current_lemma.form.getAttribute("class")) + " affix").trim() + class_value + "</p>";
            }
            section_html += "</header>";
            if (current_lemma.meanings.length > 1) {
                section_html += "<ul>";
                for (j = 0; j < current_lemma.meanings.length; j++) {
                    section_html += "<li>";
                    if (current_lemma.meanings.item(j).getAttribute("class") != current_lemma.word_class) section_html += "<small>(" + Dictionary.getHumanReadableWordClass(current_lemma.meanings.item(j).getAttribute("class")) + ")</small> ";
                    section_html += Dictionary.getHTML(current_lemma.meanings.item(j));
                    section_html += "</li>";
                }
                section_html += "</ul>";
            }
            else if (current_lemma.meanings.length == 1) {
                section_html += "<p>";
                if (current_lemma.meanings.item(0).getAttribute("class") != current_lemma.word_class) section_html += "<small>(" + Dictionary.getHumanReadableWordClass(current_lemma.meanings.item(0).getAttribute("class")) + ")</small> ";
                section_html += Dictionary.getHTML(current_lemma.meanings.item(0));
                section_html += "</p>";
            }
            if (current_lemma.etymology) section_html += "<h3>etymology</h3><p>" + Dictionary.getHTML(current_lemma.etymology) + "</p>";
            current_element.innerHTML = section_html;
            Dictionary.element.appendChild(current_element);
        }
        document.body.textContent = null;
        document.body.appendChild(document.createElement("main").appendChild(Dictionary.element).parentElement);
        document.getElementById("filter-button").addEventListener("click", function(){window.location.hash = Dictionary.getLemmaName(document.getElementById("filter-input").value);} ,false);
        document.getElementById("filter-input").addEventListener("keypress", function(e){if (e.key === "Enter" || e.keyCode === 13) window.location.hash = Dictionary.getLemmaName(document.getElementById("filter-input").value);} ,false);
        document.getElementById("unfilter-button").addEventListener("click", function(){window.location.hash = ":";}, false);
        Dictionary.filter();
    },
    splashes: [],
    string: function(n) {
        if (typeof n == "string") {
            return n;
        }
        else if (typeof n == "number") {
            return String(n);
        }
        return "";
    },
    title: "",
    title_lang: ""
}

window.addEventListener("load", Dictionary.init, false);
window.addEventListener("hashchange", Dictionary.filter, false);
