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
} from '../../../../Enums/Index';
import { Identity, Passive, Skill, SkillDescriptionPart } from '../../../../Models/Index';

const SevenAssocSouthSection6RyoshuDefense: Skill = {
    Name: "Counter",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 1 [Slash Fragility]")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ryoshu/SevenAssociationSouthSection6/Counter.png'
}

const SevenAssocSouthSection6RyoshuSkill1: Skill = {
    Name: "Slash",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]")],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ryoshu/SevenAssociationSouthSection6/Slash.png'
}

const SevenAssocSouthSection6RyoshuSkill2: Skill = {
    Name: "Upper Slash",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +14,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Skill Power +2 against units with [Slash Fragility]<br>"+
            "[Clash Win] Gain 1 [Attack Power Up] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Defense Level Down]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ryoshu/SevenAssociationSouthSection6/UpperSlash.png'
}

const SevenAssocSouthSection6RyoshuSkill3: Skill = {
    Name: "Swash",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Clash Win] This skill inflicts 2 additional [Slash Fragility]"),
            new SkillDescriptionPart("[On Hit] Inflict 3 [Slash Fragility] next turn", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ryoshu/SevenAssociationSouthSection6/Swash.png'
}

export const SevenAssocSouthSection6Ryoshu: Identity = {
    Id: 10402,
    Name: "Seven Assoc. South Section 6",
    Sinner: SinnerEnum.Ryoshu,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 63,
    HealthPerLevel: 2.17,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [SevenAssocSouthSection6RyoshuSkill1, 
            SevenAssocSouthSection6RyoshuSkill2, 
            SevenAssocSouthSection6RyoshuSkill3, 
            SevenAssocSouthSection6RyoshuDefense],
    Passives: [
        new Passive("C. I. H.",
            PassiveTypeEnum.Combat,
            "Deal +10% Slash damage this turn.",
            [{ sin: SinEnum.Gluttony, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Ice Breaker",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Max HP inflicts +1 [Rupture]",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Ryoshu/Identities/SevenAssociationSouthSection6/10402gacksung.png',
    PortraitImageDir: './assets/Sinners/Ryoshu/Identities/SevenAssociationSouthSection6/10402gacksunginfo.png'
}