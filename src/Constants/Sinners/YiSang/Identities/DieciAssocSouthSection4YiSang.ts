import {
    DamageTypeEnum,
    DefenseTypeEnum,
    FactionEnum,
    KeywordEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    RarityEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../Enums/Index";
import { Identity, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const DieciAssocSouthSection4YiSangDefense: Skill = {
    Name: "Fixated Study",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 12,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Randomly [Discard] 2 of this unit's Skills in ascending order of ranks from all of its Skill Slots<br>"+
            "[On Use] Gain +5 [Aggro] to this Skill Slot next turn")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/DieciAssociationSouthSection4/FixatedStudy.png"
}

const DieciAssocSouthSection4YiSangSkill1: Skill = {
    Name: "Expend Knowledge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("Gain ([Insight] x 3% of Max HP) Shield if this Skill is Discarded<br>"+
            "[On Use] [Discard] 1 Skill of the highest rank in all of this unit's Skill Slots<br>"+
            "[On Use] If target has 5+ [Sinking], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold by [Insight]", 1),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold by [Insight]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/DieciAssociationSouthSection4/ExpendKnowledge.png"
}

const DieciAssocSouthSection4YiSangSkill2: Skill = {
    Name: "Seal Shut",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("Gain ([Insight] x 6% of Max HP) Shield if this Skill is Discarded<br>"+
            "[On Use] [Discard] 1 Skill of the highest rank in all of this unit's Skill Slots<br>"+
            "[On Use] If the target has 5+ [Sinking], Coin Power +1<br>"+
            "[On Use] Gain +3 [Aggro] to this Skill Slot next turn"),
        new SkillDescriptionPart("[On Hit] Inflict [Sinking] equal to [Insight]", 2),
        new SkillDescriptionPart("[On Hit] Inflict [Sinking] equal to [Insight]", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/DieciAssociationSouthSection4/SealShut.png"
}

const DieciAssocSouthSection4YiSangSkill3: Skill = {
    Name: "Grace of Knowledge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Gain ([Insight] x 12% of Max HP) Shield if this Skill is Discarded<br>"+
            "[On Use] Gain +10 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] At 50%- HP, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Sinking] Count", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/DieciAssociationSouthSection4/GraceOfKnowledge.png"
}

export const DieciAssocSouthSection4YiSang: Identity = {
    Id: 10108,
    Name: "Dieci Assoc. South Section 4",
    Sinner: SinnerEnum.YiSang,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [60, 30],
    DefenseLevel: +3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [DieciAssocSouthSection4YiSangSkill1, 
                DieciAssocSouthSection4YiSangSkill2, 
                DieciAssocSouthSection4YiSangSkill3, 
                DieciAssocSouthSection4YiSangDefense],
    Passives: [
        new Passive("Sinking Knowledge",
            PassiveTypeEnum.Combat,
            "When attacked, inflict 1 [Sinking] on the attacker. When attacked while Shielded, inflict 1 additional [Sinking] on the attacker. (4 times max)",
            [{ sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Reviewed Knowledge",
            PassiveTypeEnum.Support,
            "When 1 ally with the highest Speed Discards a Skill, gain (5 x Discarded Skill rank)% of the Max HP as Shield (2 times per turn)",
            [{ sin: SinEnum.Sloth, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/YiSang/Identities/DieciAssociationSouthSection4/10108gacksung.png",
    PortraitImageDir: "./assets/Sinners/YiSang/Identities/DieciAssociationSouthSection4/10108gacksunginfo.png"
}