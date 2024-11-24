import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ZweiAssocWestSection3IshmaelDefense implements Skill {
    readonly Name: string = "Your Shield";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Defense;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 3;
    readonly Coins: number = 1;
    readonly CoinValue: number = +12;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Clashable Guard]<br>"+
            "[Combat Start] Gain 2 [Defensive Stance]. (once per turn)<br>"+
            "[On Use] Gain +10 [Tremor] Count (once per turn)<br>"+
            "[Clash Win] Trigger [Tremor Burst]"),
            new SkillDescriptionPart("[Unbreakable Coin]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = undefined;
    readonly DefenseType?: DefenseTypeEnum | undefined = DefenseTypeEnum.Guard;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ishmael/ZweiAssocWestSection3/YourShieldUT4.png";
}