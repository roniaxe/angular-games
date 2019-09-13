export class Note {
    private id: number;
    public text: string;

    /**
     * Note Constructor
     */
    constructor(id: number, text: string) {
        this.id = id;
        this.text = text;
    }

    public get noteId(): number {
        return this.id;
    }
}
