# User Story: Sign Up, Sign In, And Migrate Guest Lists

## Story

As a player, I want to make temporary lists before signing in and then save them to my account so I do not lose work I started as a guest.

## Source Specs

- `../specs/technical/T002-local-storage-and-data-architecture.md`
- `../specs/user-interface/UI002-page-shell-and-navigation.md`
- `../specs/user-interface/UI006-empty-states-and-errors.md`
- `../specs/user-interface/UI007-accessibility.md`

## Scenario

1. The user creates or edits lists while signed out.
2. The website stores those lists as temporary browser-local guest data.
3. The To-do page warns that guest progress is saved only on the current device/browser.
4. The user signs up or signs in with email/password.
5. If this is a new account, the website requires a display name.
6. After successful sign-up or sign-in, the website migrates guest lists into the signed-in Supabase account.
7. The website keeps guest data until remote migration succeeds.
8. After confirmed migration, the website clears or marks the guest copy as migrated to prevent duplicate imports.

## Acceptance Criteria

- [ ] Signed-out users can create temporary guest lists.
- [ ] Guest lists are described as device/browser-local data.
- [ ] Email/password is the first supported auth provider.
- [ ] New account setup requires a display name.
- [ ] Guest lists migrate automatically after sign-up or sign-in.
- [ ] Migration is idempotent and does not create duplicate account lists on retry.
- [ ] Guest data is not cleared until every intended remote record has persisted.
- [ ] Signing out returns the user to guest behavior.

## Out Of Scope

- Official game account sync.
- Public sharing or export.
- User settings sync.
