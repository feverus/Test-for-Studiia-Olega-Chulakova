export function LoadLangPack(langpack, value) {
	return {
		type: "LOAD_LANG_PACK",
		value: value,
		langpack: langpack
	};
}

