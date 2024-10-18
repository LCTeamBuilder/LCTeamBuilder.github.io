export class SkillDescriptionPart{
    readonly Coin: number = 0;
    readonly Text: string;

    constructor(text: string, coin?: number){
        this.Coin = coin ?? this.Coin;
        this.Text = text;
    }
}