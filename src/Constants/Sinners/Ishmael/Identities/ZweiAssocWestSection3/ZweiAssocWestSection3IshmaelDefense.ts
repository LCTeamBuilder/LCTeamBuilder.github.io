import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ZweiAssocWestSection3IshmaelDefense: Skill = {
    Name: "Your Shield",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 1,
    CoinValue: +12,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Guard]<br>"+
            "[Combat Start] Gain 2 [Defensive Stance]. (once per turn)<br>"+
            "[On Use] Gain +10 [Tremor] Count (once per turn)<br>"+
            "[Clash Win] Trigger [Tremor Burst]"),
            new SkillDescriptionPart("[Unbreakable Coin]", 1)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/ZweiAssocWestSection3/YourShieldUT4.png"
}