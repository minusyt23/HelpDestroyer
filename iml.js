/// IML
/// Intermediate Markup Language. Made to make things easier for converting, even though it will take more time.

export class IML {
    text = "";

    fontPool = ["30px Arial"];
    fgColorPool = ["000000"];
    bgColorPool = ["FFFFFF"];

    fontMap = [0];
    boldMap = [0];
    italicMap = [0];
    underlineMap = [0];
    fgColorMap = [0];
    bgColorMap = [0];
    
    constructor() {
        
    }

    getFonts() {
        // Iterate over the fonts commands
    }

    addFont(name, points) {
        let pixels = points * (4/3);
        let font = pixels.toString() + "px " + name;
        this.fontPool.push(font);
    }

    addFgColor(color) {}
    addBgColor(color) {}

    insertText(text, start) {
        // Insert text
        this.text = this.text.substring(0, start) + text + this.text.substring(start + text.length);

        // Edit maps
        // If inside, lengthen

        this.fontMap.splice(start, 0, ...Array(text.length).fill(this.fontMap[start - 1]));
        this.boldMap.splice(start, 0, ...Array(text.length).fill(this.boldMap[start - 1]));
        this.italicMap.splice(start, 0, ...Array(text.length).fill(this.italicMap[start - 1]));
        this.underlineMap.splice(start, 0, ...Array(text.length).fill(this.underlineMap[start - 1]));
        this.fgColorMap.splice(start, 0, ...Array(text.length).fill(this.fgColorMap[start - 1]));
        this.bgColorMap.splice(start, 0, ...Array(text.length).fill(this.bgColorMap[start - 1]));
    }

    deleteText(start, lenght) { 
        // Delete text
        this.text = this.text.substring(0, start) + this.text.substring(start + lenght);

        // Move/edit selections
        this.fontMap.splice(start, lenght);
        this.boldMap.splice(start, lenght);
        this.italicMap.splice(start, lenght);
        this.underlineMap.splice(start, lenght);
        this.fgColorMap.splice(start, lenght);
        this.bgColorMap.splice(start, lenght);
    }


}