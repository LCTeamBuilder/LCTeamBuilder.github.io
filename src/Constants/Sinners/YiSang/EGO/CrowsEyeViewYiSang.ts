import {
    DamageTypeEnum,
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from '../../../../Enums/Index';
import { Ego, Passive, Skill, SkillDescriptionPart } from '../../../../Models/Index';

const CrowsEyeViewYisangAwakening: Skill = {
    Name: "Crow's Eye View",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 18,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: -4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 2 [Attack Power Down]<br>"+
            "[On Hit] Apply 3 [Haste] to all allies next turn<br>"+
            "[On Hit] Inflict 2 [Bind] next turn", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/YiSang/EGO/CrowsEyeView/20101awakenprofile.png'
}

export const CrowsEyeViewYisang: Ego = {
    Id: 20101,
    Name: "Crow's Eye View",
    Sinner: SinnerEnum.YiSang,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: CrowsEyeViewYisangAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: undefined,
    CorrosionSanityCost: undefined,
    Passive: new Passive("Silence", PassiveTypeEnum.Ego, "When hit by an attack, gain 3 [Bind] next turn, and deal +20% damage when attacking with a type or Affinity the target is Weak or Fatal to. (Once per turn.)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 0.75 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 1 },              { sin: SinEnum.Sloth, amount: 3}],
    Keywords: [],
    FullImageDir: './assets/Sinners/YiSang/EGO/CrowsEyeView/20101cg.png',

}