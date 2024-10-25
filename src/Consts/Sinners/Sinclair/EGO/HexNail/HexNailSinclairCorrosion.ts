import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class HexNailSinclairCorrosion implements Skill{
    readonly Name: string = "Hex Nail";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 25;
    readonly Coins: number = 2;
    readonly CoinValue: number = -6;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[After Attack] If the target has [Curse], immediately activate it twice and reduce it by 2"),
        new SkillDescriptionPart("[Tails Hit] Inflict 3 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Curse]<br>"+
            "[On Hit] Inflict 3 [Nails]<br>"+
            "[On Hit] At 4+ Envy Reson. including this Skill, inflict 1 [Clash Power Down] (once per turn)<br>"+
            "[Tails Hit] Inflict 2 [Bind] next turn (once per turn)<br>"+
            "[Tails Hit] Inflict 2 [Defense Level Down] next turn (once per turn)", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Sinclair/EGO/HexNail/21007erosionprofile.png";
}