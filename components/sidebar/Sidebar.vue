<script setup>
const config = useAppConfig()
const { open } = useContactModal()
</script>

<template>
  <aside
    relative
    contents
    inset-y-none
    left-none
    flex
    flex-col
    flex-none
    overflow-y-auto
    transition
    duration-200
    ease-in-out
    w-52
    xl:w-62
    z-auto
  >
    <div flex-1 space-y-6 h-full p-1>
      <div flex flex-col gap-4>
        <div flex flex-col justify-center p-2>
          <div flex flex-none items-center justify-between>
            <span flex items-center space-x-3>
              <h2 text-lg font-semibold tracking-wide line-clamp-1>
                {{ config.name }}
              </h2>
            </span>
          </div>
        </div>

        <nav flex flex-col gap-4>
          <SidebarSection>
            <SidebarNavLink icon="Shapes" href="/">
              Recents
            </SidebarNavLink>
            <SidebarNavLink icon="User" href="/about">
              About
            </SidebarNavLink>
            <SidebarNavLink icon="Code" href="/projects">
              Projects
            </SidebarNavLink>
          </SidebarSection>

          <SidebarSection label="Resources">
            <SidebarNavLink icon="Stack" href="/stack">
              Stack
            </SidebarNavLink>
            <SidebarNavLink icon="Bookmark" href="/bookmarks">
              Bookmarks
            </SidebarNavLink>
            <SidebarNavLink icon="Notes" href="/notes">
              Notes
            </SidebarNavLink>
          </SidebarSection>

          <SidebarSection label="Stay in touch">
            <SidebarNavButton icon="Chat" @click.prevent="open">
              Contact
            </SidebarNavButton>
            <SidebarNavLink
              icon="Twitter"
              external
              :to="config.socials.twitter"
              target="_blank"
            >
              Twitter
            </SidebarNavLink>
            <SidebarNavLink
              icon="Github"
              external
              :to="config.socials.github"
              target="_blank"
            >
              GitHub
            </SidebarNavLink>
          </SidebarSection>
        </nav>
      </div>
    </div>
  </aside>
</template>
