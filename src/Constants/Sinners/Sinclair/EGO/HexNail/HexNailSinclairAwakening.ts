import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class HexNailSinclairAwakening implements Skill{
    readonly Name: string = "Hex Nail";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 9;
    readonly Coins: number = 2;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Before Attack] For every 3 Envy Reson. including this Skill, Atk Weight +1 (max 2)<br>"+
            "[After Attack] If the target has [Curse], immediately activate it twice and reduce it by 2"),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Curse]<br>"+
            "- Inflict 1 additional [Curse] for every 2 negative effect on the target that aren't [Curse] or [Nails] (max 2)<br>"+
            "[On Hit] Inflict 3 [Nails]<br>"+
            "[On Hit] At 4+ [Curse], inflict 1 [Clash Power Down] (once per turn)<br>"+
            "[Heads Hit] Inflict 2 [Bind] next turn (once per turn)", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Sinclair/EGO/HexNail/21007awakenprofile.png";
}