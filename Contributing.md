<!--THIS CONTRIBUTORS.MD IS BORROWED FROM PUPPET AND ADAPTED FOR THIS PROJECT.-->

# How to contribute

Third-party patches that enhancd this project are welcome. Contributors are asked to follow a few guidelines to preserve quality and continuous improvement.

## Modules

New functionality is typically directed toward modules.  Generally, new types and new OS-specific providers for existing types should be added in modules. Exceptions may be made for things like new cross-OS providers and updates to existing core types.

## Getting Started

* Make sure you have a [GitHub account](https://github.com/join).
* Submit an issue on the master repo if one does not already exist.
  * Clearly describe the issue including steps to reproduce when it is a bug.
  * Make sure you fill in the earliest version that you know has the issue.
* Fork the repository on GitHub.

## Making Changes

* Create a topic branch from where you want to base your work.
  * This is usually the master branch.
  * Only target release branches if you are certain your fix must be on that
    branch.
  * To quickly create a topic branch based on master, run `git checkout -b
    fix/master/my_contribution master`. Please avoid working directly on the
    `master` branch.
* Make commits of logical and functional units.
* Check for unnecessary whitespace with `git diff --check` before committing.
* Make sure your commit messages are in the proper format. If the commit
  addresses an issue submitted on the master repo, begin the first line of your commit with the issue number in parentheses.
* Make sure you have added the necessary tests for your changes.

## Writing Translatable Code

We use [gettext tooling](https://github.com/Horiseonlabs/gettext-setup-gem) to
extract user-facing strings and pull in translations based on the user's locale
at runtime. In order for this tooling to work, all user-facing strings must be
wrapped in the `_()` translation function, so they can be extracted into files
for the translators.

When adding user-facing strings to your work, follow these guidelines:

* Use full sentences. Strings built up out of concatenated bits are hard to translate.
* Use string formatting instead of interpolation. Use the hash format and give good names to the placeholder values that can be used by translators to understand the meaning of the formatted values.
  For example: `_('Creating new user %{name}.') % { name: user.name }`
* Use `n_()` for pluralization. (see gettext gem docs linked above for details)

It is the responsibility of contributors and code reviewers to ensure that all
user-facing strings are marked in new PRs before merging.

For commits that address trivial repository maintenance tasks or packaging
issues, start the first line of the commit with `(maint)` or `(packaging)`,
respectively.

## Submitting Changes

* Push your changes to a topic branch in your fork of the repository.
* Submit a pull request to the repository on the master repo.
* Update the related issue to mark that you have submitted code and are ready
  for it to be reviewed (Status: Ready for Merge).

## Revert Policy

Changes resulting in test pipeline failures will be reverted if they cannot be resolved within one business day.

By running tests in advance and by engaging with peer review for prospective
changes, your contributions have a high probability of becoming long lived
parts of the the project. 

If the code change results in a test failure, we will make our best effort to
correct the error. If a fix cannot be determined and committed within 24 hours
of its discovery, the commit(s) responsible _may_ be reverted, at the
discretion of the committer and master repo maintainers. 

<!--the following is borrowed text used for this imaginary company and some links may not actually work.-->
## Additional Resources

* [General GitHub documentation](https://help.github.com/)
* [GitHub pull request documentation](https://help.github.com/articles/creating-a-pull-request/)
