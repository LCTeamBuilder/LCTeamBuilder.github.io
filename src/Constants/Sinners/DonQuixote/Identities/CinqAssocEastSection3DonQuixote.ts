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

const CinqAssocEastSection3DonQuixoteDefense: Skill = {
    Name: "Thou'rt in dire need of a lesson in table manners!",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, gain +1 Coin Power for every 2 Speed difference (max 2)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/CinqAssocEastSection3/1031104.png'
}

const CinqAssocEastSection3DonQuixoteSkill1: Skill = {
    Name: "Fa Jin",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, gain Coin Power based on Speed difference (Coin Power +1 for every 2 Speed difference; max 2)<br>"+
            "[On Use] Gain +3 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]<br>"+
            "[On Crit] Inflict +1 [Burn] Count", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/CinqAssocEastSection3/1031101.png'
}

const CinqAssocEastSection3DonQuixoteSkill2: Skill = {
    Name: "Virescent Flame Palm",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, gain Coin Power based on Speed difference (Coin Power +1 for every 2 Speed difference; max 2)<br>"+
            "[Clash Win] Gain 3 [Poise]<br>"+
            "- Gain additional [Poise] Count equal to [Nerve Strike] - Don Quixote on target"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Poise] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Burn]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Burn]<br>"+
            "[On Hit] Inflict 1 [Defense Level Down] for every 6 [Burn] on target (max 5, once per turn)<br>"+
            "- Inflict additional [Defense Level Down] equal to [Nerve Strike] - Don Quixote on target", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/CinqAssocEastSection3/1031102.png'
}

const CinqAssocEastSection3DonQuixoteSkill3: Skill = {
    Name: "Salut!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +15% damage for every [Nerve Strike] - Don Quixote on target (max 45%)<br>"+
            "If this unit's Speed is faster than the target's, gain Coin Power based on Speed difference (Coin Power +1 for every 2 Speed difference; max 2)<br>"+
            "[Clash Win] Gain 5 [Poise]<br>"+
            "- If target has [Nerve Strike] - Don Quixote, gain 3 additional [Poise]"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Burn]P", 3),
        new SkillDescriptionPart("Deal ([Poise] on self + [Burn] on target)% damage on Critical Hit (max 50%)<br>"+
            "[On Hit] If target has [Nerve Strike] - Don Quixote, inflict 3 [Defense Level Down]", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/CinqAssocEastSection3/1031103.png'
}

export const CinqAssocEastSection3DonQuixote: Identity = {
    Id: 10311,
    Name: "Cinq Assoc. East Section 3",
    Sinner: SinnerEnum.DonQuixote,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: +2,
    SlashResist: 2,
    PierceResist: 0.5,
    BluntResist: 1,
    Skills: [CinqAssocEastSection3DonQuixoteSkill1, 
            CinqAssocEastSection3DonQuixoteSkill2, 
            CinqAssocEastSection3DonQuixoteSkill3, 
            CinqAssocEastSection3DonQuixoteDefense],
    Passives: [
        new Passive("Virescent Pyrojade",
            PassiveTypeEnum.Combat,
            "Turn End: gain 1 [Haste] next turn for every 3 [Poise] Potency on self (max 2)<br><br>"+

            "Against the target(or the Part) a Base Attack Skill hit last, inflict [Nerve Strike] - Don Quixote next turn (once per turn)<br><br>"+
            
            "Deal +([Burn] Potency on the target)% damage on Critical Hit (max 15%) <br>"+
            "- Increase max cap by 5% for every 1 [Nerve Strike] - Don Quixote on the target",
            [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Featherstride Technique",
            PassiveTypeEnum.Support,
            "1 ally with the fastest Speed: On Clash Win against enemies with [Burn] or 'Unique Burn', gain 1 [Haste] next turn (once per turn)<br>"+
            "- If the target has 20+ [Burn] Potency, gain 1 additional [Haste]",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/DonQuixote/Identities/CinqAssocEastSection3/10311gacksung.png',
    PortraitImageDir: './assets/Sinners/DonQuixote/Identities/CinqAssocEastSection3/10311gacksunginfo.png'
}