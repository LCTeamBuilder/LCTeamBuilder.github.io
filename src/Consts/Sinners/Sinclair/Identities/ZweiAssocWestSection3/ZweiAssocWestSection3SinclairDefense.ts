import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ZweiAssocWestSection3SinclairDefense implements Skill {
    readonly Name: string = "Zwei Knight's Greatsword Form - Guard";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Defense;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 2;
    readonly Coins: number = 1;
    readonly CoinValue: number = +9;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Clashable Guard]<br>"+
            "[Combat Start] Gain +5 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] Gain +3 [Tremor] Count (once per turn)<br>"+
            "[Clash Win] Trigger [Tremor Burst]"),
        new SkillDescriptionPart("[Unbreakable Coin]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = undefined;
    readonly DefenseType?: DefenseTypeEnum | undefined = DefenseTypeEnum.Guard;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Sinclair/ZweiAssocWestSection3/ZweiKnightsGreatswordFormGuardUT4.png";
}