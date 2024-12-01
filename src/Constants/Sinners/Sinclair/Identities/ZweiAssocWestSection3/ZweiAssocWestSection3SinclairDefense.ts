import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ZweiAssocWestSection3SinclairDefense: Skill = {
    Name: "Zwei Knight's Greatsword Form - Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 2,
    Coins: 1,
    CoinValue: +9,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Guard]<br>"+
            "[Combat Start] Gain +5 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] Gain +3 [Tremor] Count (once per turn)<br>"+
            "[Clash Win] Trigger [Tremor Burst]"),
        new SkillDescriptionPart("[Unbreakable Coin]", 1)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/ZweiAssocWestSection3/ZweiKnightsGreatswordFormGuardUT4.png"
}