import { Notice, Plugin } from 'obsidian';

export default class MyPlugin extends Plugin {

	async onload() {
		new Notice("Enabled Smeagol Test!")

	}

	onunload() {
		new Notice("Disabled Smeagol Test :(")
	}
}